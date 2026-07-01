import * as THREE from 'three';

interface Particle {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  maxLife: number;
  active: boolean;
}

// Comic white-water spray, screen shake and vision-obscure flash.
export class Effects {
  private particles: Particle[] = [];
  private scene: THREE.Scene;
  private shake = 0;
  private visionEl: HTMLDivElement;
  private vision = 0; // 0..1 opacity target decays

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    const geo = new THREE.SphereGeometry(0.12, 5, 4);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
    });
    for (let i = 0; i < 220; i++) {
      const mesh = new THREE.Mesh(geo, mat.clone());
      mesh.visible = false;
      scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(),
        life: 0,
        maxLife: 1,
        active: false,
      });
    }

    // vision-obscure overlay
    this.visionEl = document.createElement('div');
    this.visionEl.style.cssText = `
      position:fixed;inset:0;pointer-events:none;z-index:50;
      background:radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), rgba(220,235,255,0.8));
      opacity:0;transition:none;`;
    document.body.appendChild(this.visionEl);
  }

  spawnSpray(pos: THREE.Vector3, big: boolean): void {
    const count = big ? 90 : 42;
    const power = big ? 6.5 : 4.5;
    let spawned = 0;
    for (const p of this.particles) {
      if (p.active) continue;
      p.active = true;
      p.mesh.visible = true;
      p.mesh.position.set(pos.x, pos.y + 0.6, pos.z);
      const ang = Math.random() * Math.PI * 2;
      const up = 0.6 + Math.random() * 1.0;
      const spread = 0.4 + Math.random() * 1.0;
      p.vel.set(
        Math.cos(ang) * spread * power,
        up * power,
        Math.sin(ang) * spread * power
      );
      p.maxLife = 0.6 + Math.random() * 0.5;
      p.life = p.maxLife;
      const s = (big ? 1.4 : 1) * (0.6 + Math.random() * 0.8);
      p.mesh.scale.setScalar(s);
      spawned++;
      if (spawned >= count) break;
    }
    // vision flash + shake
    this.vision = Math.max(this.vision, big ? 0.95 : 0.7);
    this.shake = Math.max(this.shake, big ? 0.55 : 0.32);
  }

  update(dt: number): void {
    for (const p of this.particles) {
      if (!p.active) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.active = false;
        p.mesh.visible = false;
        continue;
      }
      p.vel.y -= 14 * dt; // gravity
      p.mesh.position.addScaledVector(p.vel, dt);
      if (p.mesh.position.y < 0.1) {
        p.mesh.position.y = 0.1;
        p.vel.y *= -0.35;
        p.vel.x *= 0.6;
        p.vel.z *= 0.6;
      }
      const mat = p.mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.min(1, p.life / p.maxLife);
    }

    // vision decay
    if (this.vision > 0) {
      this.vision -= dt * 1.8;
      if (this.vision < 0) this.vision = 0;
      this.visionEl.style.opacity = String(this.vision);
    }

    // shake decay
    if (this.shake > 0) {
      this.shake -= dt * 1.6;
      if (this.shake < 0) this.shake = 0;
    }
  }

  // Returns a small random camera offset for screen shake.
  shakeOffset(): THREE.Vector3 {
    if (this.shake <= 0) return new THREE.Vector3();
    const m = this.shake * 0.4;
    return new THREE.Vector3(
      (Math.random() - 0.5) * m,
      (Math.random() - 0.5) * m,
      (Math.random() - 0.5) * m
    );
  }

  clear(): void {
    for (const p of this.particles) {
      p.active = false;
      p.mesh.visible = false;
    }
    this.vision = 0;
    this.shake = 0;
    this.visionEl.style.opacity = '0';
  }
}
