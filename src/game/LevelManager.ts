import * as THREE from 'three';
import { LevelConfig, ObstacleSpec } from './levels';

export interface Equipment {
  spec: ObstacleSpec;
  mesh: THREE.Object3D;
  // moves back and forth between a and b
  a: THREE.Vector2;
  b: THREE.Vector2;
  t: number;
  dir: number;
  speed: number;
}

export interface World {
  group: THREE.Group;
  obstacles: ObstacleSpec[]; // includes perimeter walls
  troughs: THREE.Vector2[];
  equipment: Equipment[];
  halfW: number;
  halfD: number;
  spawnPoints: THREE.Vector2[]; // candidate turkey spawn positions
  playerStart: THREE.Vector2;
}

const WALL_H = 6;
const WALL_T = 1;

export class LevelManager {
  private texCache = new Map<string, THREE.Texture>();

  build(level: LevelConfig): World {
    const group = new THREE.Group();
    const halfW = level.barnWidth / 2;
    const halfD = level.barnDepth / 2;
    const obstacles: ObstacleSpec[] = [];
    const troughs: THREE.Vector2[] = [];
    const equipment: Equipment[] = [];

    this.buildFloorAndRoof(group, level);
    this.buildWalls(group, obstacles, halfW, halfD);

    // ---- Per-level obstacle layouts ----
    if (level.index === 0) {
      this.layoutLevel1(group, obstacles, troughs, halfW, halfD);
    } else if (level.index === 1) {
      this.layoutLevel2(group, obstacles, troughs, halfW, halfD);
    } else {
      this.layoutLevel3(group, obstacles, troughs, equipment, halfW, halfD);
    }

    // Build spawn candidate grid avoiding solids.
    const spawnPoints = this.buildSpawnPoints(obstacles, halfW, halfD);

    return {
      group,
      obstacles,
      troughs,
      equipment,
      halfW,
      halfD,
      spawnPoints,
      playerStart: new THREE.Vector2(0, halfD - 4),
    };
  }

  // ---------- materials ----------
  private woodMat(color = 0x6b4a2b): THREE.Material {
    return new THREE.MeshLambertMaterial({ color });
  }

  private strawTexture(): THREE.Texture {
    if (this.texCache.has('straw')) return this.texCache.get('straw')!;
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#cbab5f';
    ctx.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 400; i++) {
      const x = Math.random() * 128;
      const y = Math.random() * 128;
      const len = 4 + Math.random() * 10;
      const a = Math.random() * Math.PI;
      ctx.strokeStyle = Math.random() > 0.5 ? '#b89a4e' : '#d8bd76';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len);
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    this.texCache.set('straw', tex);
    return tex;
  }

  // ---------- structure ----------
  private buildFloorAndRoof(group: THREE.Group, level: LevelConfig): void {
    const tex = this.strawTexture();
    tex.repeat.set(level.barnWidth / 4, level.barnDepth / 4);
    const floorGeo = new THREE.PlaneGeometry(
      level.barnWidth,
      level.barnDepth
    );
    const floorMat = new THREE.MeshLambertMaterial({ map: tex });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    // Roof beams (decorative, above head)
    const beamMat = this.woodMat(0x5a3d22);
    const count = Math.floor(level.barnWidth / 5);
    for (let i = 0; i <= count; i++) {
      const x = -level.barnWidth / 2 + (i * level.barnWidth) / count;
      const beamGeo = new THREE.BoxGeometry(0.4, 0.4, level.barnDepth);
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(x, WALL_H - 0.5, 0);
      group.add(beam);
    }
    // a couple of cross beams
    for (let i = 0; i <= Math.floor(level.barnDepth / 8); i++) {
      const z = -level.barnDepth / 2 + (i * level.barnDepth) /
        Math.floor(level.barnDepth / 8);
      const beamGeo = new THREE.BoxGeometry(level.barnWidth, 0.3, 0.3);
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(0, WALL_H - 1.2, z);
      group.add(beam);
    }
  }

  private buildWalls(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    halfW: number,
    halfD: number
  ): void {
    const mat = new THREE.MeshLambertMaterial({ color: 0x7a5230 });
    const planks = new THREE.MeshLambertMaterial({ color: 0x6b4626 });

    const makeWall = (
      cx: number,
      cz: number,
      w: number,
      d: number
    ): void => {
      const geo = new THREE.BoxGeometry(w, WALL_H, d);
      const mesh = new THREE.Mesh(geo, Math.random() > 0.5 ? mat : planks);
      mesh.position.set(cx, WALL_H / 2, cz);
      group.add(mesh);
      obstacles.push({
        kind: 'wall',
        x: cx,
        z: cz,
        w,
        d,
        h: WALL_H,
        solid: true,
        blocksSight: true,
      });
    };

    makeWall(0, -halfD, halfW * 2 + WALL_T, WALL_T); // north
    makeWall(0, halfD, halfW * 2 + WALL_T, WALL_T); // south
    makeWall(-halfW, 0, WALL_T, halfD * 2 + WALL_T); // west
    makeWall(halfW, 0, WALL_T, halfD * 2 + WALL_T); // east
  }

  // ---------- obstacle primitives ----------
  private addHay(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    x: number,
    z: number,
    w = 2,
    d = 1.4,
    h = 1.4
  ): void {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshLambertMaterial({ color: 0xc9a94e });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, h / 2, z);
    // binding lines
    const lineMat = new THREE.MeshBasicMaterial({ color: 0x8a6a2a });
    for (const off of [-w * 0.25, w * 0.25]) {
      const lg = new THREE.BoxGeometry(0.06, h * 1.01, d * 1.01);
      const l = new THREE.Mesh(lg, lineMat);
      l.position.set(off, 0, 0);
      mesh.add(l);
    }
    group.add(mesh);
    obstacles.push({
      kind: 'hay',
      x,
      z,
      w,
      d,
      h,
      solid: true,
      blocksSight: true,
    });
  }

  private addTrough(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    troughs: THREE.Vector2[],
    x: number,
    z: number
  ): void {
    const w = 2.6;
    const d = 0.9;
    const h = 0.5;
    const trough = new THREE.Group();
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshLambertMaterial({ color: 0x5b3a20 })
    );
    base.position.y = h / 2;
    trough.add(base);
    // feed
    const feed = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.88, 0.12, d * 0.7),
      new THREE.MeshLambertMaterial({ color: 0xd9b24a })
    );
    feed.position.y = h - 0.05;
    trough.add(feed);
    trough.position.set(x, 0, z);
    group.add(trough);
    troughs.push(new THREE.Vector2(x, z));
    obstacles.push({
      kind: 'trough',
      x,
      z,
      w,
      d,
      h,
      solid: true,
      blocksSight: false,
    });
  }

  private addMud(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    x: number,
    z: number,
    w = 4,
    d = 4
  ): void {
    const geo = new THREE.PlaneGeometry(w, d);
    const mat = new THREE.MeshLambertMaterial({ color: 0x4a3526 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0.02, z);
    group.add(mesh);
    obstacles.push({
      kind: 'mud',
      x,
      z,
      w,
      d,
      h: 0,
      solid: false,
      blocksSight: false,
    });
  }

  private addGate(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    x: number,
    z: number,
    w: number,
    d: number
  ): void {
    const mat = new THREE.MeshLambertMaterial({ color: 0x8a5a2a });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, 2.2, d), mat);
    mesh.position.set(x, 1.1, z);
    // rails
    group.add(mesh);
    obstacles.push({
      kind: 'gate',
      x,
      z,
      w,
      d,
      h: 2.2,
      solid: true,
      blocksSight: false,
    });
  }

  // ---------- layouts ----------
  private layoutLevel1(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    troughs: THREE.Vector2[],
    halfW: number,
    halfD: number
  ): void {
    // scattered hay bales
    const hayPos: [number, number][] = [
      [-8, -6],
      [6, -8],
      [10, 4],
      [-10, 6],
      [0, 0],
      [-4, 10],
      [8, 10],
      [-12, -10],
    ];
    for (const [x, z] of hayPos) this.addHay(group, obstacles, x, z);
    // feed troughs
    this.addTrough(group, obstacles, troughs, -halfW + 4, 0);
    this.addTrough(group, obstacles, troughs, halfW - 4, -6);
  }

  private layoutLevel2(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    troughs: THREE.Vector2[],
    halfW: number,
    halfD: number
  ): void {
    // Pen partitions with gate gaps
    // A long internal wall with a gap (gate choke point)
    this.addGate(group, obstacles, -6, -8, 14, 0.6);
    this.addGate(group, obstacles, 10, -8, 6, 0.6);
    this.addGate(group, obstacles, 6, 6, 0.6, 14);
    // hay clusters
    const clusters: [number, number][] = [
      [-14, 4],
      [-12, 6],
      [12, 12],
      [14, 10],
      [-4, 14],
      [2, -14],
      [4, -12],
      [0, 2],
      [-16, -12],
    ];
    for (const [x, z] of clusters) this.addHay(group, obstacles, x, z);
    // mud patches
    this.addMud(group, obstacles, 8, 0, 6, 6);
    this.addMud(group, obstacles, -10, -4, 5, 5);
    // troughs
    this.addTrough(group, obstacles, troughs, -halfW + 4, 8);
    this.addTrough(group, obstacles, troughs, halfW - 4, 4);
    this.addTrough(group, obstacles, troughs, 0, -halfD + 5);
  }

  private layoutLevel3(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    troughs: THREE.Vector2[],
    equipment: Equipment[],
    halfW: number,
    halfD: number
  ): void {
    // Maze-like internal walls (gates) forming corridors
    this.addGate(group, obstacles, -10, -10, 18, 0.6);
    this.addGate(group, obstacles, 8, -6, 0.6, 16);
    this.addGate(group, obstacles, -4, 6, 0.6, 18);
    this.addGate(group, obstacles, 12, 10, 14, 0.6);
    this.addGate(group, obstacles, -16, 2, 10, 0.6);
    // hay everywhere
    const hayPos: [number, number][] = [
      [-20, -18],
      [18, -16],
      [20, 14],
      [-18, 16],
      [0, 0],
      [-6, -14],
      [14, 2],
      [-14, 10],
      [6, 18],
      [10, -20],
      [-22, 6],
      [22, -4],
    ];
    for (const [x, z] of hayPos) this.addHay(group, obstacles, x, z);
    // lots of mud
    this.addMud(group, obstacles, 6, -6, 7, 7);
    this.addMud(group, obstacles, -8, 8, 8, 6);
    this.addMud(group, obstacles, 16, 16, 6, 6);
    this.addMud(group, obstacles, -18, -8, 6, 6);
    // troughs
    this.addTrough(group, obstacles, troughs, -halfW + 4, -10);
    this.addTrough(group, obstacles, troughs, halfW - 4, 10);
    this.addTrough(group, obstacles, troughs, 0, 0);

    // Moving farm equipment hazard — a cart that rolls along a track.
    this.addEquipment(
      group,
      equipment,
      new THREE.Vector2(-halfW + 6, -2),
      new THREE.Vector2(halfW - 6, -2),
      3.2
    );
    this.addEquipment(
      group,
      equipment,
      new THREE.Vector2(4, halfD - 6),
      new THREE.Vector2(4, -halfD + 6),
      2.6
    );
  }

  private addEquipment(
    group: THREE.Group,
    equipment: Equipment[],
    a: THREE.Vector2,
    b: THREE.Vector2,
    speed: number
  ): void {
    const w = 2.4;
    const d = 1.6;
    const h = 1.8;
    const cart = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshLambertMaterial({ color: 0xb02b2b })
    );
    body.position.y = h / 2 + 0.3;
    cart.add(body);
    const warn = new THREE.Mesh(
      new THREE.BoxGeometry(w * 1.02, 0.4, d * 1.02),
      new THREE.MeshBasicMaterial({ color: 0xf2c200 })
    );
    warn.position.y = h * 0.5;
    cart.add(warn);
    // wheels
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x222222 });
    for (const sx of [-w / 2 + 0.3, w / 2 - 0.3]) {
      for (const sz of [-d / 2 + 0.3, d / 2 - 0.3]) {
        const wheel = new THREE.Mesh(
          new THREE.CylinderGeometry(0.4, 0.4, 0.3, 10),
          wheelMat
        );
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(sx, 0.4, sz);
        cart.add(wheel);
      }
    }
    cart.position.set(a.x, 0, a.y);
    group.add(cart);

    const spec: ObstacleSpec = {
      kind: 'equipment',
      x: a.x,
      z: a.y,
      w,
      d,
      h,
      solid: true,
      blocksSight: false,
    };
    equipment.push({
      spec,
      mesh: cart,
      a: a.clone(),
      b: b.clone(),
      t: 0,
      dir: 1,
      speed,
    });
  }

  // ---------- spawn grid ----------
  private buildSpawnPoints(
    obstacles: ObstacleSpec[],
    halfW: number,
    halfD: number
  ): THREE.Vector2[] {
    const pts: THREE.Vector2[] = [];
    const step = 3;
    for (let x = -halfW + 3; x <= halfW - 3; x += step) {
      for (let z = -halfD + 3; z <= halfD - 3; z += step) {
        const p = new THREE.Vector2(x, z);
        let ok = true;
        for (const o of obstacles) {
          if (!o.solid) continue;
          if (
            Math.abs(x - o.x) < o.w / 2 + 1 &&
            Math.abs(z - o.z) < o.d / 2 + 1
          ) {
            ok = false;
            break;
          }
        }
        if (ok) pts.push(p);
      }
    }
    return pts;
  }
}
