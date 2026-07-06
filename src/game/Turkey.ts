import * as THREE from 'three';
import { Species, SPECIES, SpeciesStyle } from './levels';

// A cartoon flippable critter built from simple low-poly shapes.
// (Historically a turkey — now any species: hen, salmon, pig, office worker...)
export class Turkey {
  group: THREE.Group;
  pos: THREE.Vector2; // world XZ
  vel: THREE.Vector2 = new THREE.Vector2();
  heading = 0;
  isBronze: boolean;
  active = true;
  speed: number;
  fleeSpeed: number;
  radius: number;
  hoverY: number;
  species: Species;

  wanderAngle = Math.random() * Math.PI * 2;
  flockId: number;

  private style: SpeciesStyle;
  private body: THREE.Object3D;
  private flipTime = 0;
  private bobPhase = Math.random() * Math.PI * 2;

  constructor(
    x: number,
    z: number,
    isBronze: boolean,
    species: Species,
    speed: number,
    fleeSpeed: number,
    flockId: number
  ) {
    this.pos = new THREE.Vector2(x, z);
    this.isBronze = isBronze;
    this.species = species;
    this.style = SPECIES[species];
    this.speed = speed * (isBronze ? 1.35 : 1);
    this.fleeSpeed = fleeSpeed * (isBronze ? 1.4 : 1);
    this.flockId = flockId;
    this.radius = this.style.radius * (isBronze ? 1.15 : 1);
    this.hoverY = this.style.hoverY;
    this.group = new THREE.Group();
    this.body = this.build();
    this.group.add(this.body);
    this.group.position.set(x, this.hoverY, z);
  }

  private col(normal: number, bronze: number): number {
    return this.isBronze ? bronze : normal;
  }

  private build(): THREE.Object3D {
    const root = new THREE.Group();
    const s = this.style;
    const scale = s.scale * (this.isBronze ? 1.18 : 1);
    root.scale.setScalar(scale);

    switch (s.kind) {
      case 'bird':
        this.buildBird(root);
        break;
      case 'fish':
        this.buildFish(root);
        break;
      case 'shrimp':
        this.buildShrimp(root);
        break;
      case 'pig':
        this.buildPig(root);
        break;
      case 'worker':
        this.buildWorker(root);
        break;
    }

    if (this.isBronze) {
      const ringGeo = new THREE.TorusGeometry(0.75, 0.05, 6, 18);
      const ringMat = new THREE.MeshBasicMaterial({
        color: this.style.bronzeAccent,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.06;
      root.add(ring);
    }
    return root;
  }

  private mat(color: number): THREE.MeshLambertMaterial {
    return new THREE.MeshLambertMaterial({ color });
  }

  private eyes(root: THREE.Object3D, y: number, z: number, dx = 0.1): void {
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    for (const sx of [-dx, dx]) {
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 5, 4),
        eyeMat
      );
      eye.position.set(sx, y, z);
      root.add(eye);
    }
  }

  // ---------------- bird (turkey / hen / chicken) ----------------
  private buildBird(root: THREE.Object3D): void {
    const s = this.style;
    const bodyC = this.col(s.body, s.bronzeBody);
    const accent = this.col(s.accent, s.bronzeAccent);

    const bodyGeo = new THREE.SphereGeometry(0.55, 8, 6);
    bodyGeo.scale(1, 0.85, 1.15);
    const bodyMesh = new THREE.Mesh(bodyGeo, this.mat(bodyC));
    bodyMesh.position.y = 0.55;
    root.add(bodyMesh);

    if (s.tailFan) {
      const tail = new THREE.Mesh(
        new THREE.CircleGeometry(0.7, 7, 0, Math.PI),
        new THREE.MeshLambertMaterial({
          color: this.col(s.alt, s.bronzeAccent),
          side: THREE.DoubleSide,
        })
      );
      tail.position.set(0, 0.75, -0.5);
      tail.rotation.x = -Math.PI / 2 + 0.5;
      root.add(tail);
    } else {
      // small perky tail
      const tail = new THREE.Mesh(
        new THREE.ConeGeometry(0.22, 0.4, 5),
        this.mat(this.col(s.alt, s.bronzeAccent))
      );
      tail.position.set(0, 0.7, -0.5);
      tail.rotation.x = -1.1;
      root.add(tail);
    }

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.26, 7, 6),
      this.mat(bodyC)
    );
    head.position.set(0, 1.0, 0.45);
    root.add(head);

    // comb for non-turkey birds
    if (!s.tailFan) {
      const comb = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.16, 0.26),
        this.mat(accent)
      );
      comb.position.set(0, 1.24, 0.45);
      root.add(comb);
    }

    const beak = new THREE.Mesh(
      new THREE.ConeGeometry(0.09, 0.22, 6),
      this.mat(0xf2b705)
    );
    beak.position.set(0, 1.0, 0.72);
    beak.rotation.x = Math.PI / 2;
    root.add(beak);

    const wattle = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 6, 5),
      this.mat(accent)
    );
    wattle.position.set(0, 0.86, 0.66);
    root.add(wattle);

    const legMat = this.mat(0xf2b705);
    for (const sx of [-0.18, 0.18]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.45, 5),
        legMat
      );
      leg.position.set(sx, 0.22, 0.05);
      root.add(leg);
    }

    this.eyes(root, 1.05, 0.65);
  }

  // ---------------- fish (salmon) ----------------
  private buildFish(root: THREE.Object3D): void {
    const s = this.style;
    const bodyC = this.col(s.body, s.bronzeBody);

    const bodyGeo = new THREE.SphereGeometry(0.5, 8, 6);
    bodyGeo.scale(0.6, 0.8, 1.7); // long along z
    const body = new THREE.Mesh(bodyGeo, this.mat(bodyC));
    body.position.y = 0.4;
    root.add(body);

    // belly stripe
    const belly = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 8, 6).scale(0.45, 0.4, 1.5),
      this.mat(this.col(s.accent, s.bronzeAccent))
    );
    belly.position.set(0, 0.2, 0);
    root.add(belly);

    const finMat = new THREE.MeshLambertMaterial({
      color: this.col(s.alt, s.bronzeAccent),
      side: THREE.DoubleSide,
    });
    // tail fin
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.5, 4), finMat);
    tail.position.set(0, 0.4, -0.95);
    tail.rotation.x = -Math.PI / 2;
    tail.scale.set(1, 1, 0.4);
    root.add(tail);
    // dorsal fin
    const dorsal = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.35, 4), finMat);
    dorsal.position.set(0, 0.75, 0);
    root.add(dorsal);
    // side fins
    for (const sx of [-0.35, 0.35]) {
      const pec = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.3, 4), finMat);
      pec.position.set(sx, 0.35, 0.2);
      pec.rotation.z = sx > 0 ? -1.2 : 1.2;
      root.add(pec);
    }

    this.eyes(root, 0.5, 0.7, 0.16);
  }

  // ---------------- shrimp ----------------
  private buildShrimp(root: THREE.Object3D): void {
    const s = this.style;
    const bodyC = this.col(s.body, s.bronzeBody);
    // curved segmented body
    const segs = 5;
    for (let i = 0; i < segs; i++) {
      const r = 0.28 - i * 0.03;
      const seg = new THREE.Mesh(
        new THREE.SphereGeometry(r, 6, 5),
        this.mat(bodyC)
      );
      const t = i / (segs - 1);
      seg.position.set(0, 0.5 - Math.sin(t * 1.6) * 0.15, 0.4 - t * 0.8);
      root.add(seg);
    }
    // tail fan
    const fan = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 0.25, 4),
      this.mat(this.col(s.accent, s.bronzeAccent))
    );
    fan.position.set(0, 0.55, -0.55);
    fan.rotation.x = Math.PI / 2;
    fan.scale.set(1.4, 1, 0.4);
    root.add(fan);
    // antennae
    const antMat = this.mat(this.col(s.alt, s.bronzeAccent));
    for (const sx of [-0.06, 0.06]) {
      const ant = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.6, 4),
        antMat
      );
      ant.position.set(sx, 0.55, 0.65);
      ant.rotation.x = 1.1;
      root.add(ant);
    }
    this.eyes(root, 0.56, 0.5, 0.09);
  }

  // ---------------- pig ----------------
  private buildPig(root: THREE.Object3D): void {
    const s = this.style;
    const bodyC = this.col(s.body, s.bronzeBody);

    const bodyGeo = new THREE.SphereGeometry(0.6, 8, 6);
    bodyGeo.scale(1.15, 0.9, 1.3);
    const body = new THREE.Mesh(bodyGeo, this.mat(bodyC));
    body.position.y = 0.6;
    root.add(body);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 8, 6),
      this.mat(bodyC)
    );
    head.position.set(0, 0.65, 0.7);
    root.add(head);

    // snout
    const snout = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.18, 0.16, 8),
      this.mat(this.col(s.accent, s.bronzeAccent))
    );
    snout.position.set(0, 0.6, 1.02);
    snout.rotation.x = Math.PI / 2;
    root.add(snout);

    // ears
    for (const sx of [-0.22, 0.22]) {
      const ear = new THREE.Mesh(
        new THREE.ConeGeometry(0.14, 0.22, 4),
        this.mat(this.col(s.alt, s.bronzeAccent))
      );
      ear.position.set(sx, 0.95, 0.62);
      root.add(ear);
    }

    // legs
    const legMat = this.mat(this.col(s.alt, s.bronzeBody));
    for (const sx of [-0.32, 0.32]) {
      for (const sz of [-0.35, 0.45]) {
        const leg = new THREE.Mesh(
          new THREE.CylinderGeometry(0.11, 0.11, 0.4, 6),
          legMat
        );
        leg.position.set(sx, 0.2, sz);
        root.add(leg);
      }
    }

    // curly tail
    const tail = new THREE.Mesh(
      new THREE.TorusGeometry(0.1, 0.03, 5, 10, Math.PI * 1.5),
      this.mat(bodyC)
    );
    tail.position.set(0, 0.7, -0.75);
    root.add(tail);

    this.eyes(root, 0.75, 0.95, 0.14);
  }

  // ---------------- office worker ----------------
  private buildWorker(root: THREE.Object3D): void {
    const s = this.style;
    const shirt = this.col(s.body, s.bronzeBody);
    const trousers = this.col(s.alt, 0x1a1a22);
    const skin = 0xe8c9a0;

    // legs
    for (const sx of [-0.15, 0.15]) {
      const leg = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.7, 0.22),
        this.mat(trousers)
      );
      leg.position.set(sx, 0.35, 0);
      root.add(leg);
    }
    // torso
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.7, 0.32),
      this.mat(shirt)
    );
    torso.position.set(0, 1.05, 0);
    root.add(torso);
    // tie
    const tie = new THREE.Mesh(
      new THREE.BoxGeometry(0.09, 0.4, 0.04),
      this.mat(this.isBronze ? s.bronzeAccent : 0xb02b2b)
    );
    tie.position.set(0, 1.05, 0.17);
    root.add(tie);
    // arms
    for (const sx of [-0.37, 0.37]) {
      const arm = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.65, 0.2),
        this.mat(shirt)
      );
      arm.position.set(sx, 1.05, 0);
      root.add(arm);
    }
    // head
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 8, 6),
      this.mat(skin)
    );
    head.position.set(0, 1.62, 0);
    root.add(head);
    // hair
    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2),
      this.mat(this.isBronze ? 0x555555 : 0x3a2a1a)
    );
    hair.position.set(0, 1.64, 0);
    root.add(hair);

    this.eyes(root, 1.64, 0.22, 0.09);
  }

  // ---------------- runtime ----------------
  syncTransform(dt: number, time: number): void {
    this.group.position.set(this.pos.x, this.hoverY, this.pos.y);
    this.group.rotation.y = this.heading;

    if (this.active) {
      const speedMag = this.vel.length();
      const bob = Math.sin(time * 10 + this.bobPhase) * 0.05 * (0.4 + speedMag);
      const swim =
        this.hoverY > 0 ? Math.sin(time * 3 + this.bobPhase) * 0.2 : 0;
      this.group.position.y = this.hoverY + Math.max(-0.2, bob) + swim;
      // gentle roll for swimmers
      this.group.rotation.z =
        this.hoverY > 0 ? Math.sin(time * 5 + this.bobPhase) * 0.15 : 0;
    } else {
      this.flipTime += dt;
      const t = Math.min(1, this.flipTime / 0.45);
      const ease = 1 - Math.pow(1 - t, 3);
      this.group.rotation.z = ease * Math.PI;
      this.group.rotation.x = ease * 0.3;
      // ground species drop; swimmers float belly-up
      this.group.position.y = this.hoverY > 0 ? this.hoverY + 0.3 : 0;
    }
  }

  setHeadingFromVel(): void {
    if (this.vel.lengthSq() > 0.0001) {
      this.heading = Math.atan2(this.vel.x, this.vel.y);
    }
  }

  flip(): void {
    this.active = false;
    this.vel.set(0, 0);
    this.flipTime = 0;
  }

  dispose(): void {
    this.group.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      if (m.material) {
        const mat = m.material as THREE.Material | THREE.Material[];
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat.dispose();
      }
    });
  }
}
