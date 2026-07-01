import * as THREE from 'three';

// A cartoon turkey built from simple low-poly shapes.
export class Turkey {
  group: THREE.Group;
  pos: THREE.Vector2; // world XZ
  vel: THREE.Vector2 = new THREE.Vector2();
  heading = 0;
  isBronze: boolean;
  active = true;
  speed: number;
  fleeSpeed: number;
  radius = 0.5;

  // wander state
  wanderAngle = Math.random() * Math.PI * 2;
  // flock id for loose grouping
  flockId: number;

  private body: THREE.Object3D;
  private flipTime = 0; // animates the flip
  private bobPhase = Math.random() * Math.PI * 2;

  constructor(
    x: number,
    z: number,
    isBronze: boolean,
    speed: number,
    fleeSpeed: number,
    flockId: number
  ) {
    this.pos = new THREE.Vector2(x, z);
    this.isBronze = isBronze;
    this.speed = speed * (isBronze ? 1.35 : 1);
    this.fleeSpeed = fleeSpeed * (isBronze ? 1.4 : 1);
    this.flockId = flockId;
    this.group = new THREE.Group();
    this.body = this.build();
    this.group.add(this.body);
    this.group.position.set(x, 0, z);
  }

  private build(): THREE.Object3D {
    const mainColor = this.isBronze ? 0xcd7f32 : 0x7a4a2b;
    const accent = this.isBronze ? 0xffd479 : 0xc0392b;

    const root = new THREE.Group(); // holder for the turkey parts
    const scale = this.isBronze ? 1.18 : 1;

    // Body — squat ellipsoid
    const bodyGeo = new THREE.SphereGeometry(0.55 * scale, 8, 6);
    bodyGeo.scale(1, 0.85, 1.15);
    const bodyMat = new THREE.MeshLambertMaterial({ color: mainColor });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 0.55 * scale;
    root.add(bodyMesh);

    // Tail fan
    const tailMat = new THREE.MeshLambertMaterial({
      color: this.isBronze ? 0xe6a85c : 0x955b34,
      side: THREE.DoubleSide,
    });
    const tailGeo = new THREE.CircleGeometry(0.7 * scale, 7, 0, Math.PI);
    const tail = new THREE.Mesh(tailGeo, tailMat);
    tail.position.set(0, 0.75 * scale, -0.5 * scale);
    tail.rotation.x = -Math.PI / 2 + 0.5;
    root.add(tail);

    // Head
    const headMat = new THREE.MeshLambertMaterial({ color: mainColor });
    const headGeo = new THREE.SphereGeometry(0.26 * scale, 7, 6);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 1.0 * scale, 0.45 * scale);
    root.add(head);

    // Beak
    const beakGeo = new THREE.ConeGeometry(0.09 * scale, 0.22 * scale, 6);
    const beakMat = new THREE.MeshLambertMaterial({ color: 0xf2b705 });
    const beak = new THREE.Mesh(beakGeo, beakMat);
    beak.position.set(0, 1.0 * scale, 0.72 * scale);
    beak.rotation.x = Math.PI / 2;
    root.add(beak);

    // Wattle / snood accent
    const wattleGeo = new THREE.SphereGeometry(0.08 * scale, 6, 5);
    const wattleMat = new THREE.MeshLambertMaterial({ color: accent });
    const wattle = new THREE.Mesh(wattleGeo, wattleMat);
    wattle.position.set(0, 0.86 * scale, 0.66 * scale);
    root.add(wattle);

    // Legs
    const legMat = new THREE.MeshLambertMaterial({ color: 0xf2b705 });
    for (const sx of [-0.18, 0.18]) {
      const legGeo = new THREE.CylinderGeometry(
        0.05 * scale,
        0.05 * scale,
        0.45 * scale,
        5
      );
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(sx * scale, 0.22 * scale, 0.05 * scale);
      root.add(leg);
    }

    // Eyes
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    for (const sx of [-0.1, 0.1]) {
      const eyeGeo = new THREE.SphereGeometry(0.045 * scale, 5, 4);
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.position.set(sx * scale, 1.05 * scale, 0.65 * scale);
      root.add(eye);
    }

    if (this.isBronze) {
      // subtle glow ring marker so it reads as special
      const ringGeo = new THREE.TorusGeometry(0.7, 0.05, 6, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xffe08a });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.06;
      root.add(ring);
    }

    return root;
  }

  // Called every frame to sync transform + idle bob.
  syncTransform(dt: number, time: number): void {
    this.group.position.set(this.pos.x, 0, this.pos.y);
    // face heading
    this.group.rotation.y = this.heading;

    if (this.active) {
      const speedMag = this.vel.length();
      // little waddle bob proportional to speed
      const bob = Math.sin(time * 10 + this.bobPhase) * 0.05 * (0.4 + speedMag);
      this.group.position.y = Math.max(0, bob);
    } else {
      // flipped: tip over onto back and lie still
      this.flipTime += dt;
      const t = Math.min(1, this.flipTime / 0.45);
      // ease-out flip
      const ease = 1 - Math.pow(1 - t, 3);
      this.group.rotation.z = ease * Math.PI; // roll onto back
      this.group.rotation.x = ease * 0.3;
      this.group.position.y = 0;
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
