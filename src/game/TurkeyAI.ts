import * as THREE from 'three';
import { Turkey } from './Turkey';
import { World } from './LevelManager';
import { LevelConfig } from './levels';

const tmpA = new THREE.Vector2();
const tmpB = new THREE.Vector2();

// Drives all turkey steering behaviours each frame.
export class TurkeyAI {
  // scratch
  private steer = new THREE.Vector2();

  update(
    turkeys: Turkey[],
    playerPos: THREE.Vector2,
    world: World,
    level: LevelConfig,
    dt: number
  ): void {
    const fleeRadius = 6 + level.evasiveness * 5;

    for (let i = 0; i < turkeys.length; i++) {
      const t = turkeys[i];
      if (!t.active) continue;

      this.steer.set(0, 0);

      const toPlayer = tmpA.copy(playerPos).sub(t.pos);
      const distPlayer = toPlayer.length();
      const fleeing = distPlayer < fleeRadius;

      if (fleeing) {
        // Flee directly away from player (stronger when closer).
        const away = tmpB.copy(t.pos).sub(playerPos);
        if (away.lengthSq() < 0.001) away.set(Math.random() - 0.5, Math.random() - 0.5);
        away.normalize();
        const urgency = 1 - distPlayer / fleeRadius;
        this.steer.addScaledVector(away, 2.5 + urgency * 2.5);

        // Hide: bias toward the far side of the nearest sight-blocker.
        const hide = this.hideVector(t, playerPos, world);
        if (hide) this.steer.addScaledVector(hide, 1.6);
      } else {
        // Wander
        t.wanderAngle += (Math.random() - 0.5) * (1.5 + level.evasiveness * 2) * dt * 4;
        this.steer.x += Math.sin(t.wanderAngle) * 0.6;
        this.steer.y += Math.cos(t.wanderAngle) * 0.6;

        // Flocking with same-flock neighbours
        this.addFlocking(t, turkeys, this.steer);

        // Occasionally drift toward a feed trough
        if (world.troughs.length && (i + Math.floor(t.wanderAngle)) % 3 === 0) {
          const tr = this.nearestTrough(t.pos, world.troughs);
          if (tr) {
            const toTr = tmpB.copy(tr).sub(t.pos);
            const d = toTr.length();
            if (d > 2.5) this.steer.addScaledVector(toTr.normalize(), 0.5);
          }
        }

        // Blocking/crowding: medium-range turkeys try to get in the way.
        if (level.blocking > 0 && distPlayer < fleeRadius + 8 && distPlayer > fleeRadius) {
          if ((i % 3) === 0) {
            const toP = tmpB.copy(playerPos).sub(t.pos).normalize();
            this.steer.addScaledVector(toP, level.blocking * 1.6);
          }
        }
      }

      // Separation from very close neighbours (avoid stacking)
      this.addSeparation(t, turkeys, this.steer);

      // Obstacle repulsion (avoid walls / solids)
      this.addObstacleRepulsion(t, world, this.steer);

      // ---- integrate ----
      const speed = fleeing ? t.fleeSpeed : t.speed;
      if (this.steer.lengthSq() > 0.0001) {
        this.steer.normalize();
        // smooth velocity toward desired
        t.vel.lerp(this.steer.multiplyScalar(speed), Math.min(1, dt * 6));
      } else {
        t.vel.multiplyScalar(0.9);
      }

      this.integrate(t, world, dt);
      t.setHeadingFromVel();
    }
  }

  private nearestTrough(
    p: THREE.Vector2,
    troughs: THREE.Vector2[]
  ): THREE.Vector2 | null {
    let best: THREE.Vector2 | null = null;
    let bd = Infinity;
    for (const tr of troughs) {
      const d = p.distanceToSquared(tr);
      if (d < bd) {
        bd = d;
        best = tr;
      }
    }
    return best;
  }

  private hideVector(
    t: Turkey,
    playerPos: THREE.Vector2,
    world: World
  ): THREE.Vector2 | null {
    // Find nearest sight-blocking obstacle within range.
    let best: { x: number; z: number } | null = null;
    let bd = Infinity;
    for (const o of world.obstacles) {
      if (!o.blocksSight || o.kind === 'wall') continue;
      const d = (t.pos.x - o.x) ** 2 + (t.pos.y - o.z) ** 2;
      if (d < bd && d < 12 * 12) {
        bd = d;
        best = o;
      }
    }
    if (!best) return null;
    // target = point on opposite side of obstacle from player
    const dir = new THREE.Vector2(best.x - playerPos.x, best.z - playerPos.y);
    if (dir.lengthSq() < 0.001) return null;
    dir.normalize();
    const target = new THREE.Vector2(
      best.x + dir.x * 2.2,
      best.z + dir.y * 2.2
    );
    return target.sub(t.pos).normalize();
  }

  private addFlocking(
    t: Turkey,
    turkeys: Turkey[],
    out: THREE.Vector2
  ): void {
    const center = new THREE.Vector2();
    const align = new THREE.Vector2();
    let count = 0;
    for (const o of turkeys) {
      if (o === t || !o.active || o.flockId !== t.flockId) continue;
      const d = t.pos.distanceTo(o.pos);
      if (d < 6) {
        center.add(o.pos);
        align.add(o.vel);
        count++;
      }
    }
    if (count > 0) {
      center.divideScalar(count);
      const cohesion = center.sub(t.pos);
      if (cohesion.lengthSq() > 0.001) out.addScaledVector(cohesion.normalize(), 0.4);
      if (align.lengthSq() > 0.001) out.addScaledVector(align.normalize(), 0.3);
    }
  }

  private addSeparation(
    t: Turkey,
    turkeys: Turkey[],
    out: THREE.Vector2
  ): void {
    for (const o of turkeys) {
      if (o === t || !o.active) continue;
      const d = t.pos.distanceTo(o.pos);
      if (d < 1.3 && d > 0.0001) {
        const push = tmpA.copy(t.pos).sub(o.pos).divideScalar(d);
        out.addScaledVector(push, (1.3 - d) * 1.5);
      }
    }
  }

  private addObstacleRepulsion(
    t: Turkey,
    world: World,
    out: THREE.Vector2
  ): void {
    for (const o of world.obstacles) {
      if (!o.solid) continue;
      // closest point on box to turkey
      const cx = Math.max(o.x - o.w / 2, Math.min(t.pos.x, o.x + o.w / 2));
      const cz = Math.max(o.z - o.d / 2, Math.min(t.pos.y, o.z + o.d / 2));
      const dx = t.pos.x - cx;
      const dz = t.pos.y - cz;
      const d2 = dx * dx + dz * dz;
      const reach = 1.6;
      if (d2 < reach * reach) {
        const d = Math.sqrt(d2) || 0.001;
        out.x += (dx / d) * (reach - d) * 1.4;
        out.y += (dz / d) * (reach - d) * 1.4;
      }
    }
  }

  private integrate(t: Turkey, world: World, dt: number): void {
    let nx = t.pos.x + t.vel.x * dt;
    let nz = t.pos.y + t.vel.y * dt;

    // axis-separated collision against solids
    nx = this.resolve(t, nx, t.pos.y, true, world);
    nz = this.resolve(t, nx, nz, false, world);

    const bx = world.halfW - 1;
    const bz = world.halfD - 1;
    if (nx < -bx || nx > bx) t.vel.x *= -0.5;
    if (nz < -bz || nz > bz) t.vel.y *= -0.5;
    nx = Math.max(-bx, Math.min(bx, nx));
    nz = Math.max(-bz, Math.min(bz, nz));

    t.pos.set(nx, nz);
  }

  private resolve(
    t: Turkey,
    x: number,
    z: number,
    movingX: boolean,
    world: World
  ): number {
    const r = t.radius;
    for (const o of world.obstacles) {
      if (!o.solid) continue;
      const minX = o.x - o.w / 2 - r;
      const maxX = o.x + o.w / 2 + r;
      const minZ = o.z - o.d / 2 - r;
      const maxZ = o.z + o.d / 2 + r;
      if (x > minX && x < maxX && z > minZ && z < maxZ) {
        if (movingX) {
          x = t.vel.x > 0 ? minX : maxX;
          t.vel.x = 0;
        } else {
          z = t.vel.y > 0 ? minZ : maxZ;
          t.vel.y = 0;
        }
      }
    }
    return movingX ? x : z;
  }
}
