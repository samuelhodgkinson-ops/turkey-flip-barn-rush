import * as THREE from 'three';
import { LevelConfig, ObstacleSpec, Theme, ThemeStyle, THEMES } from './levels';

export interface Equipment {
  spec: ObstacleSpec;
  mesh: THREE.Object3D;
  a: THREE.Vector2;
  b: THREE.Vector2;
  t: number;
  dir: number;
  speed: number;
}

export interface World {
  group: THREE.Group;
  obstacles: ObstacleSpec[];
  troughs: THREE.Vector2[];
  equipment: Equipment[];
  halfW: number;
  halfD: number;
  spawnPoints: THREE.Vector2[];
  playerStart: THREE.Vector2;
  theme: ThemeStyle;
}

const WALL_T = 1;

export class LevelManager {
  private texCache = new Map<string, THREE.Texture>();
  private theme!: ThemeStyle;
  private themeName!: Theme;

  build(level: LevelConfig): World {
    this.themeName = level.theme;
    this.theme = THEMES[level.theme];
    const group = new THREE.Group();
    const halfW = level.barnWidth / 2;
    const halfD = level.barnDepth / 2;
    const obstacles: ObstacleSpec[] = [];
    const troughs: THREE.Vector2[] = [];
    const equipment: Equipment[] = [];

    this.buildFloorAndDecor(group, level);
    this.buildWalls(group, obstacles, halfW, halfD);
    this.layoutGeneric(group, obstacles, troughs, equipment, level, halfW, halfD);

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
      theme: this.theme,
    };
  }

  // ---------- textures ----------
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

  private noiseTexture(base: string, dark: string, light: string): THREE.Texture {
    const key = 'n' + base + dark + light;
    if (this.texCache.has(key)) return this.texCache.get(key)!;
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 900; i++) {
      const x = Math.random() * 128;
      const y = Math.random() * 128;
      const r = 1 + Math.random() * 3;
      ctx.fillStyle = Math.random() > 0.5 ? dark : light;
      ctx.fillRect(x, y, r, r);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    this.texCache.set(key, tex);
    return tex;
  }

  private hex(n: number): string {
    return '#' + n.toString(16).padStart(6, '0');
  }

  // ---------- floor + decor ----------
  private buildFloorAndDecor(group: THREE.Group, level: LevelConfig): void {
    let mat: THREE.Material;
    if (this.theme.strawFloor) {
      const tex = this.strawTexture();
      tex.repeat.set(level.barnWidth / 4, level.barnDepth / 4);
      mat = new THREE.MeshLambertMaterial({ map: tex });
    } else {
      const base = this.hex(this.theme.floorColor);
      const tex = this.noiseTexture(
        base,
        this.shade(this.theme.floorColor, -0.18),
        this.shade(this.theme.floorColor, 0.15)
      );
      tex.repeat.set(level.barnWidth / 3, level.barnDepth / 3);
      mat = new THREE.MeshLambertMaterial({ map: tex });
    }
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(level.barnWidth, level.barnDepth),
      mat
    );
    floor.rotation.x = -Math.PI / 2;
    group.add(floor);

    switch (this.theme.decor) {
      case 'beams':
        this.addBeams(group, level);
        break;
      case 'trees':
        this.addTrees(group, level);
        break;
      case 'bubbles':
        this.addUnderwaterDecor(group, level);
        break;
      case 'fences':
        this.addFences(group, level);
        break;
      case 'ceiling':
        this.addCeiling(group, level);
        break;
    }
  }

  private shade(color: number, amt: number): string {
    const r = (color >> 16) & 255;
    const g = (color >> 8) & 255;
    const b = color & 255;
    const f = (v: number) =>
      Math.max(0, Math.min(255, Math.round(v + (amt > 0 ? (255 - v) * amt : v * amt))));
    return this.hex((f(r) << 16) | (f(g) << 8) | f(b));
  }

  private addBeams(group: THREE.Group, level: LevelConfig): void {
    const beamMat = new THREE.MeshLambertMaterial({ color: 0x5a3d22 });
    const h = this.theme.wallHeight;
    const count = Math.max(3, Math.floor(level.barnWidth / 5));
    for (let i = 0; i <= count; i++) {
      const x = -level.barnWidth / 2 + (i * level.barnWidth) / count;
      const beam = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.4, level.barnDepth),
        beamMat
      );
      beam.position.set(x, h - 0.5, 0);
      group.add(beam);
    }
  }

  private addTrees(group: THREE.Group, level: LevelConfig): void {
    const hw = level.barnWidth / 2 - 2;
    const hd = level.barnDepth / 2 - 2;
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x6b4a2b });
    const canopyMat = new THREE.MeshLambertMaterial({ color: 0x5a7a3a });
    for (let i = 0; i < 10; i++) {
      const edge = Math.floor(Math.random() * 4);
      let x = (Math.random() * 2 - 1) * hw;
      let z = (Math.random() * 2 - 1) * hd;
      if (edge === 0) z = -hd + 1;
      else if (edge === 1) z = hd - 1;
      else if (edge === 2) x = -hw + 1;
      else x = hw - 1;
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.35, 3, 6),
        trunkMat
      );
      trunk.position.set(x, 1.5, z);
      group.add(trunk);
      const canopy = new THREE.Mesh(
        new THREE.SphereGeometry(1.8, 7, 5),
        canopyMat
      );
      canopy.scale.set(1, 0.5, 1);
      canopy.position.set(x, 3.4, z);
      group.add(canopy);
    }
    // sun disc
    const sun = new THREE.Mesh(
      new THREE.CircleGeometry(4, 20),
      new THREE.MeshBasicMaterial({ color: 0xfff2a0 })
    );
    sun.position.set(hw - 6, 14, -hd - 8);
    group.add(sun);
  }

  private addUnderwaterDecor(group: THREE.Group, level: LevelConfig): void {
    const hw = level.barnWidth / 2 - 1.5;
    const hd = level.barnDepth / 2 - 1.5;
    const kelpMat = new THREE.MeshLambertMaterial({ color: 0x2f7a4a });
    for (let i = 0; i < 16; i++) {
      const edge = Math.random();
      let x = (Math.random() * 2 - 1) * hw;
      let z = (Math.random() * 2 - 1) * hd;
      if (edge < 0.5) x = (Math.random() > 0.5 ? 1 : -1) * hw;
      else z = (Math.random() > 0.5 ? 1 : -1) * hd;
      const hgt = 2 + Math.random() * 3;
      const kelp = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.14, hgt, 5),
        kelpMat
      );
      kelp.position.set(x, hgt / 2, z);
      kelp.rotation.z = (Math.random() - 0.5) * 0.4;
      group.add(kelp);
    }
    // shimmering water surface overhead
    const surface = new THREE.Mesh(
      new THREE.PlaneGeometry(level.barnWidth, level.barnDepth),
      new THREE.MeshBasicMaterial({
        color: 0x2a95c0,
        transparent: true,
        opacity: 0.28,
        side: THREE.DoubleSide,
      })
    );
    surface.rotation.x = -Math.PI / 2;
    surface.position.y = this.theme.wallHeight - 0.5;
    group.add(surface);
  }

  private addFences(group: THREE.Group, level: LevelConfig): void {
    const postMat = new THREE.MeshLambertMaterial({ color: 0x6b4a2b });
    const hw = level.barnWidth / 2;
    const hd = level.barnDepth / 2;
    const step = 3;
    for (let x = -hw; x <= hw; x += step) {
      for (const z of [-hd, hd]) {
        const post = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, 1.4, 0.18),
          postMat
        );
        post.position.set(x, 0.7, z);
        group.add(post);
      }
    }
    for (let z = -hd; z <= hd; z += step) {
      for (const x of [-hw, hw]) {
        const post = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, 1.4, 0.18),
          postMat
        );
        post.position.set(x, 0.7, z);
        group.add(post);
      }
    }
  }

  private addCeiling(group: THREE.Group, level: LevelConfig): void {
    const ceil = new THREE.Mesh(
      new THREE.PlaneGeometry(level.barnWidth, level.barnDepth),
      new THREE.MeshLambertMaterial({ color: 0xeef0f2 })
    );
    ceil.rotation.x = Math.PI / 2;
    ceil.position.y = this.theme.wallHeight - 0.1;
    group.add(ceil);
    const panelMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cols = Math.floor(level.barnWidth / 6);
    const rows = Math.floor(level.barnDepth / 6);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = -level.barnWidth / 2 + (i + 0.5) * 6;
        const z = -level.barnDepth / 2 + (j + 0.5) * 6;
        const panel = new THREE.Mesh(
          new THREE.PlaneGeometry(2.4, 1.2),
          panelMat
        );
        panel.rotation.x = Math.PI / 2;
        panel.position.set(x, this.theme.wallHeight - 0.15, z);
        group.add(panel);
      }
    }
  }

  // ---------- walls ----------
  private buildWalls(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    halfW: number,
    halfD: number
  ): void {
    const H = this.theme.wallHeight;
    const mat = new THREE.MeshLambertMaterial({ color: this.theme.wallColor });

    const makeWall = (cx: number, cz: number, w: number, d: number): void => {
      const geo = new THREE.BoxGeometry(w, H, d);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cx, H / 2, cz);
      group.add(mesh);
      obstacles.push({
        kind: 'wall',
        x: cx,
        z: cz,
        w,
        d,
        h: H,
        solid: true,
        blocksSight: true,
      });
    };
    makeWall(0, -halfD, halfW * 2 + WALL_T, WALL_T);
    makeWall(0, halfD, halfW * 2 + WALL_T, WALL_T);
    makeWall(-halfW, 0, WALL_T, halfD * 2 + WALL_T);
    makeWall(halfW, 0, WALL_T, halfD * 2 + WALL_T);
  }

  // ---------- obstacle primitives (themed) ----------
  private addSolid(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    x: number,
    z: number,
    w = 2,
    d = 1.4,
    h = 1.4
  ): void {
    const t = this.themeName;
    const holder = new THREE.Group();
    if (t === 'savanna') {
      // bush
      const bush = new THREE.Mesh(
        new THREE.SphereGeometry(Math.max(w, d) * 0.6, 7, 5),
        new THREE.MeshLambertMaterial({ color: 0x4f6a34 })
      );
      bush.scale.set(1, 0.7, 1);
      bush.position.y = h * 0.5;
      holder.add(bush);
    } else if (t === 'ocean' || t === 'deepocean') {
      // coral / rock
      const rock = new THREE.Mesh(
        new THREE.IcosahedronGeometry(Math.max(w, d) * 0.55, 0),
        new THREE.MeshLambertMaterial({ color: this.theme.obstacleColor })
      );
      rock.position.y = h * 0.5;
      holder.add(rock);
      for (let i = 0; i < 3; i++) {
        const branch = new THREE.Mesh(
          new THREE.ConeGeometry(0.12, 0.9, 5),
          new THREE.MeshLambertMaterial({ color: 0xe07a8a })
        );
        branch.position.set(
          (Math.random() - 0.5) * w,
          h * 0.6 + Math.random() * 0.4,
          (Math.random() - 0.5) * d
        );
        holder.add(branch);
      }
    } else if (t === 'office') {
      // desk with monitor
      const desk = new THREE.Mesh(
        new THREE.BoxGeometry(w, h * 0.6, d),
        new THREE.MeshLambertMaterial({ color: 0x8a8f96 })
      );
      desk.position.y = h * 0.3;
      holder.add(desk);
      const monitor = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.55, 0.1),
        new THREE.MeshLambertMaterial({ color: 0x22262b })
      );
      monitor.position.set(0, h * 0.6 + 0.35, 0);
      holder.add(monitor);
      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 0.45),
        new THREE.MeshBasicMaterial({ color: 0x2a90d0 })
      );
      screen.position.set(0, h * 0.6 + 0.35, 0.06);
      holder.add(screen);
    } else {
      // hay bale (barn / henhouse / pigpen)
      const bale = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshLambertMaterial({ color: this.theme.obstacleColor })
      );
      bale.position.y = h / 2;
      const lineMat = new THREE.MeshBasicMaterial({ color: 0x8a6a2a });
      for (const off of [-w * 0.25, w * 0.25]) {
        const l = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, h * 1.01, d * 1.01),
          lineMat
        );
        l.position.set(off, 0, 0);
        bale.add(l);
      }
      holder.add(bale);
    }
    holder.position.set(x, 0, z);
    group.add(holder);
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
    const t = this.themeName;
    const holder = new THREE.Group();
    if (t === 'savanna') {
      const water = new THREE.Mesh(
        new THREE.CircleGeometry(1.5, 16),
        new THREE.MeshLambertMaterial({ color: 0x3a7aa5 })
      );
      water.rotation.x = -Math.PI / 2;
      water.position.y = 0.03;
      holder.add(water);
    } else if (t === 'ocean' || t === 'deepocean') {
      // clam
      for (const r of [0.2, -0.2]) {
        const shell = new THREE.Mesh(
          new THREE.SphereGeometry(0.8, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2),
          new THREE.MeshLambertMaterial({ color: this.theme.troughColor })
        );
        shell.position.set(0, 0.3, r);
        shell.rotation.x = r > 0 ? 0.4 : Math.PI - 0.4;
        holder.add(shell);
      }
    } else if (t === 'office') {
      // water cooler
      const stand = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 1.0, 0.7),
        new THREE.MeshLambertMaterial({ color: 0xeef2f5 })
      );
      stand.position.y = 0.5;
      holder.add(stand);
      const bottle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 0.6, 10),
        new THREE.MeshLambertMaterial({
          color: 0x3aa0d0,
          transparent: true,
          opacity: 0.7,
        })
      );
      bottle.position.y = 1.3;
      holder.add(bottle);
    } else {
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshLambertMaterial({ color: this.theme.troughColor })
      );
      base.position.y = h / 2;
      holder.add(base);
      const feed = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.88, 0.12, d * 0.7),
        new THREE.MeshLambertMaterial({ color: 0xd9b24a })
      );
      feed.position.y = h - 0.05;
      holder.add(feed);
    }
    holder.position.set(x, 0, z);
    group.add(holder);
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
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, d),
      new THREE.MeshLambertMaterial({ color: this.theme.mudColor })
    );
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
    const t = this.themeName;
    let color = 0x8a5a2a;
    if (t === 'office') color = 0xb8bcc2;
    else if (t === 'ocean' || t === 'deepocean') color = 0x2f7a4a;
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(w, 2.2, d),
      new THREE.MeshLambertMaterial({ color })
    );
    mesh.position.set(x, 1.1, z);
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
    const bodyColor = this.themeName === 'office' ? 0x556070 : 0xb02b2b;
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshLambertMaterial({ color: bodyColor })
    );
    body.position.y = h / 2 + 0.3;
    cart.add(body);
    const warn = new THREE.Mesh(
      new THREE.BoxGeometry(w * 1.02, 0.4, d * 1.02),
      new THREE.MeshBasicMaterial({ color: 0xf2c200 })
    );
    warn.position.y = h * 0.5;
    cart.add(warn);
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
    equipment.push({
      spec: {
        kind: 'equipment',
        x: a.x,
        z: a.y,
        w,
        d,
        h,
        solid: true,
        blocksSight: false,
      },
      mesh: cart,
      a: a.clone(),
      b: b.clone(),
      t: 0,
      dir: 1,
      speed,
    });
  }

  // ---------- generic procedural layout ----------
  private layoutGeneric(
    group: THREE.Group,
    obstacles: ObstacleSpec[],
    troughs: THREE.Vector2[],
    equipment: Equipment[],
    level: LevelConfig,
    halfW: number,
    halfD: number
  ): void {
    const placed: THREE.Vector2[] = [];
    const start = new THREE.Vector2(0, halfD - 4);

    const findSpot = (minEdge: number): THREE.Vector2 | null => {
      for (let attempt = 0; attempt < 40; attempt++) {
        const x = (Math.random() * 2 - 1) * (halfW - minEdge);
        const z = (Math.random() * 2 - 1) * (halfD - minEdge);
        const p = new THREE.Vector2(x, z);
        if (p.length() < 5) continue; // keep centre open
        if (p.distanceTo(start) < 6) continue; // clear player start
        let ok = true;
        for (const q of placed) {
          if (p.distanceTo(q) < 5) {
            ok = false;
            break;
          }
        }
        if (ok) return p;
      }
      return null;
    };

    // solids (hay / bush / coral / desk)
    const solidCount = 6 + level.index;
    for (let i = 0; i < solidCount; i++) {
      const p = findSpot(4);
      if (!p) continue;
      placed.push(p);
      const w = 1.8 + Math.random() * 1.2;
      const d = 1.2 + Math.random() * 1.0;
      this.addSolid(group, obstacles, p.x, p.y, w, d, 1.4);
    }

    // internal partition gates (choke points) from level 2 onward
    if (level.index >= 1) {
      this.addGate(group, obstacles, -halfW * 0.3, -halfD * 0.2, halfW * 0.7, 0.6);
      if (level.index >= 3) {
        this.addGate(group, obstacles, halfW * 0.35, halfD * 0.15, 0.6, halfD * 0.7);
      }
    }

    // feed troughs / attractors
    this.addTrough(group, obstacles, troughs, -halfW + 4, 0);
    this.addTrough(group, obstacles, troughs, halfW - 4, -halfD * 0.3);
    if (level.index >= 2) {
      this.addTrough(group, obstacles, troughs, 0, -halfD + 5);
    }

    // mud / slow patches from level 3 onward (and pig pen loves mud)
    const mudCount =
      level.theme === 'pigpen' ? 4 : level.index >= 2 ? 2 + (level.index >= 4 ? 1 : 0) : 0;
    for (let i = 0; i < mudCount; i++) {
      const p = findSpot(5);
      if (!p) continue;
      this.addMud(group, obstacles, p.x, p.y, 4 + Math.random() * 3, 4 + Math.random() * 3);
    }

    // moving hazard
    if (level.hasEquipment) {
      this.addEquipment(
        group,
        equipment,
        new THREE.Vector2(-halfW + 6, -2),
        new THREE.Vector2(halfW - 6, -2),
        3.0
      );
      this.addEquipment(
        group,
        equipment,
        new THREE.Vector2(4, halfD - 6),
        new THREE.Vector2(4, -halfD + 6),
        2.6
      );
    }
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
        let ok = true;
        for (const o of obstacles) {
          if (!o.solid) continue;
          if (Math.abs(x - o.x) < o.w / 2 + 1 && Math.abs(z - o.z) < o.d / 2 + 1) {
            ok = false;
            break;
          }
        }
        if (ok) pts.push(new THREE.Vector2(x, z));
      }
    }
    return pts;
  }
}
