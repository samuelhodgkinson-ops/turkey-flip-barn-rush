import * as THREE from 'three';
import {
  LEVELS,
  LEVEL_DURATION,
  FLIP_RANGE,
  LevelConfig,
  ThemeStyle,
} from './levels';
import { LevelManager, World } from './LevelManager';
import { PlayerController } from './PlayerController';
import { Turkey } from './Turkey';
import { TurkeyAI } from './TurkeyAI';
import { Scoring } from './Scoring';
import { Effects } from './Effects';
import { HUD } from './HUD';
import { Leaderboard } from './Leaderboard';
import { MobileControls } from './MobileControls';

type State =
  | 'start'
  | 'intro'
  | 'playing'
  | 'paused'
  | 'levelComplete'
  | 'levelFail'
  | 'final';

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();

  private levelManager = new LevelManager();
  private ai = new TurkeyAI();
  private scoring = new Scoring();
  private leaderboard = new Leaderboard();
  private effects: Effects;
  private hud: HUD;
  private player: PlayerController;
  private mobile!: MobileControls;
  private isTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  private hemiLight!: THREE.HemisphereLight;
  private dirLight!: THREE.DirectionalLight;
  private ambLight!: THREE.AmbientLight;

  private world: World | null = null;
  private worldGroup: THREE.Group | null = null;
  private turkeys: Turkey[] = [];

  private state: State = 'start';
  private levelIndex = 0;
  private timeLeft = LEVEL_DURATION;
  private currentTarget: Turkey | null = null;
  private hazardCooldown = 0;

  constructor(root: HTMLElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1410);
    this.scene.fog = new THREE.Fog(0x1a1410, 30, 80);

    this.camera = new THREE.PerspectiveCamera(
      78,
      window.innerWidth / window.innerHeight,
      0.1,
      300
    );

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = 'game-canvas';
    root.appendChild(this.renderer.domElement);

    this.setupLights();

    this.effects = new Effects(this.scene);
    this.hud = new HUD(root);
    this.player = new PlayerController(this.camera, this.renderer.domElement);
    this.player.touchMode = this.isTouch;
    this.hud.setMobile(this.isTouch);
    this.mobile = new MobileControls(root, this.player, () => {
      if (this.state === 'playing') this.tryFlip();
    });

    this.bindInput();
    window.addEventListener('resize', () => this.onResize());

    this.hud.showStart(() => this.startGame());
    this.loop();

    // Expose for debugging / automated verification (harmless in prototype).
    (window as any).__game = this;
  }

  private setupLights(): void {
    this.hemiLight = new THREE.HemisphereLight(0xfff0d0, 0x402a18, 0.9);
    this.scene.add(this.hemiLight);
    this.dirLight = new THREE.DirectionalLight(0xffe6b0, 0.7);
    this.dirLight.position.set(20, 40, 10);
    this.scene.add(this.dirLight);
    this.ambLight = new THREE.AmbientLight(0xffffff, 0.25);
    this.scene.add(this.ambLight);
  }

  private applyTheme(theme: ThemeStyle): void {
    this.scene.background = new THREE.Color(theme.bg);
    this.scene.fog = new THREE.Fog(theme.fogColor, theme.fogNear, theme.fogFar);
    this.hemiLight.color.setHex(theme.hemiSky);
    this.hemiLight.groundColor.setHex(theme.hemiGround);
    this.hemiLight.intensity = theme.hemiInt;
    this.dirLight.color.setHex(theme.dirColor);
    this.dirLight.intensity = theme.dirInt;
    this.ambLight.intensity = theme.ambInt;
  }

  // ---------------- input ----------------
  private bindInput(): void {
    this.renderer.domElement.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return; // left button only
      if (this.isTouch) return; // touch uses on-screen controls
      if (this.state === 'playing' && this.player.enabled) {
        // locked & playing -> left click flips
        this.tryFlip();
      } else if (this.state === 'playing' || this.state === 'paused') {
        // not locked yet -> first click (re)acquires pointer lock
        this.player.requestLock();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      // E also flips (keyboard alternative to left click)
      if (e.code === 'KeyE' && this.state === 'playing' && this.player.enabled) {
        this.tryFlip();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      if (this.state === 'playing' && !this.player.enabled) {
        this.state = 'paused';
      } else if (this.state === 'paused' && this.player.enabled) {
        this.state = 'playing';
      }
    });
  }

  // ---------------- game flow ----------------
  private startGame(): void {
    this.scoring.resetGame();
    this.levelIndex = 0;
    this.hud.hideOverlay();
    this.enterLevelIntro();
  }

  private enterLevelIntro(): void {
    this.state = 'intro';
    const level = LEVELS[this.levelIndex];
    this.buildLevel(level);
    this.hud.setCritterLabel(level.critterLabel);
    this.hud.setFlipVerb(level.flipVerb);
    this.hud.showLevelIntro(level, () => {
      this.hud.hideOverlay();
      this.beginPlay();
    });
  }

  private beginPlay(): void {
    this.state = 'playing';
    this.timeLeft = LEVEL_DURATION;
    this.scoring.startLevel();
    this.hud.setHudVisible(true);
    if (this.isTouch) {
      // no pointer lock on touch devices — use on-screen controls
      this.mobile.setActive(true);
    } else {
      this.player.requestLock();
    }
  }

  private buildLevel(level: LevelConfig): void {
    this.teardownLevel();
    const world = this.levelManager.build(level);
    this.world = world;
    this.worldGroup = world.group;
    this.scene.add(world.group);
    this.applyTheme(world.theme);

    // spawn critters
    this.turkeys = [];
    const pts = world.spawnPoints.slice();
    this.shuffle(pts);
    const total = level.normalCount + level.bronzeCount;
    let flock = 0;
    for (let i = 0; i < total; i++) {
      const isBronze = i >= level.normalCount;
      const p = pts[i % pts.length];
      const jx = p.x + (Math.random() - 0.5) * 2;
      const jz = p.y + (Math.random() - 0.5) * 2;
      if (i % 4 === 0) flock++; // ~4 critters per flock
      const t = new Turkey(
        jx,
        jz,
        isBronze,
        level.species,
        level.baseSpeed,
        level.fleeSpeed,
        flock
      );
      this.turkeys.push(t);
      this.scene.add(t.group);
    }

    this.player.reset(world.playerStart);
    this.effects.clear();
  }

  private teardownLevel(): void {
    for (const t of this.turkeys) {
      this.scene.remove(t.group);
      t.dispose();
    }
    this.turkeys = [];
    if (this.worldGroup) {
      this.scene.remove(this.worldGroup);
      this.worldGroup = null;
    }
    this.world = null;
  }

  private endLevel(): void {
    this.player.releaseLock();
    this.mobile.setActive(false);
    const level = LEVELS[this.levelIndex];
    const reached = this.scoring.levelScore >= level.targetScore;
    if (reached) {
      const bonuses = this.scoring.applyLevelBonuses(true);
      const isLast = this.levelIndex >= LEVELS.length - 1;
      if (isLast) {
        this.showFinal(true);
      } else {
        this.state = 'levelComplete';
        this.hud.setHudVisible(false);
        this.hud.showLevelComplete(
          level,
          this.scoring.levelScore,
          bonuses,
          this.scoring.totalScore,
          () => {
            this.levelIndex++;
            this.hud.hideOverlay();
            this.enterLevelIntro();
          }
        );
      }
    } else {
      this.state = 'levelFail';
      this.hud.setHudVisible(false);
      this.hud.showLevelFail(
        level,
        this.scoring.levelScore,
        level.targetScore,
        () => {
          // retry: rebuild same level, totals keep level score removed
          this.scoring.totalScore -= this.scoring.levelScore;
          this.hud.hideOverlay();
          this.enterLevelIntro();
        },
        () => {
          this.hud.hideOverlay();
          this.startGame();
        }
      );
    }
  }

  private showFinal(won: boolean): void {
    this.state = 'final';
    this.player.releaseLock();
    this.mobile.setActive(false);
    this.teardownLevel();
    this.hud.setHudVisible(false);
    this.hud.showFinal(
      {
        totalScore: this.scoring.totalScore,
        flipped: this.scoring.totalTurkeys,
        golden: this.scoring.totalBronze,
        missed: this.scoring.totalMissed,
        bestCombo: this.scoring.bestCombo,
        grade: this.scoring.grade(),
        won,
        levelsCleared: won ? LEVELS.length : this.levelIndex,
      },
      this.leaderboard,
      () => {
        this.hud.hideOverlay();
        this.startGame();
      }
    );
  }

  // ---------------- flip ----------------
  private tryFlip(): void {
    if (this.currentTarget && this.currentTarget.active) {
      const t = this.currentTarget;
      t.flip();
      const pts = this.scoring.flip(t.isBronze);
      this.effects.spawnSpray(
        new THREE.Vector3(t.pos.x, t.hoverY + 0.6, t.pos.y),
        t.isBronze
      );
      this.hud.popup(
        (t.isBronze ? 'GOLDEN! ' : '') + '+' + pts +
          (this.scoring.combo > 1 ? ` (x${this.scoring.combo})` : ''),
        t.isBronze ? 'bronze' : 'good'
      );
      this.currentTarget = null;
    } else {
      const pen = this.scoring.miss();
      this.hud.popup(pen < 0 ? pen.toString() : 'MISS', 'bad');
    }
  }

  private updateTarget(): void {
    if (!this.world) return;
    const pp = this.player.position2D;
    const fwd = this.player.forwardDir();
    let best: Turkey | null = null;
    let bestScore = -Infinity;
    for (const t of this.turkeys) {
      if (!t.active) continue;
      const dx = t.pos.x - pp.x;
      const dz = t.pos.y - pp.y;
      const dist = Math.hypot(dx, dz);
      if (dist > FLIP_RANGE) continue;
      const dot = (dx / (dist || 1)) * fwd.x + (dz / (dist || 1)) * fwd.y;
      if (dot < -0.35) continue; // only exclude targets well behind you
      // prefer closer + more centered
      const score = dot * 2 - dist;
      if (score > bestScore) {
        bestScore = score;
        best = t;
      }
    }
    this.currentTarget = best;
    this.hud.showPrompt(!!best);
  }

  // ---------------- equipment / hazard ----------------
  private updateEquipment(dt: number): void {
    if (!this.world) return;
    for (const eq of this.world.equipment) {
      eq.t += (eq.speed * dt * eq.dir);
      const span = eq.a.distanceTo(eq.b);
      if (eq.t > span) {
        eq.t = span;
        eq.dir = -1;
      } else if (eq.t < 0) {
        eq.t = 0;
        eq.dir = 1;
      }
      const f = span > 0 ? eq.t / span : 0;
      const px = eq.a.x + (eq.b.x - eq.a.x) * f;
      const pz = eq.a.y + (eq.b.y - eq.a.y) * f;
      eq.mesh.position.set(px, 0, pz);
      eq.spec.x = px;
      eq.spec.z = pz;
    }

    // hazard collision with player
    if (this.hazardCooldown > 0) this.hazardCooldown -= dt;
    const pp = this.player.position2D;
    for (const eq of this.world.equipment) {
      const o = eq.spec;
      if (
        Math.abs(pp.x - o.x) < o.w / 2 + 0.5 &&
        Math.abs(pp.y - o.z) < o.d / 2 + 0.5
      ) {
        if (this.hazardCooldown <= 0) {
          const pen = this.scoring.hazard();
          this.hud.popup(pen < 0 ? pen.toString() + ' HAZARD' : 'HAZARD', 'bad');
          this.effects.spawnSpray(new THREE.Vector3(pp.x, 0.6, pp.y), false);
          this.hazardCooldown = 1.2;
        }
      }
    }
  }

  private activeCount(): number {
    let n = 0;
    for (const t of this.turkeys) if (t.active) n++;
    return n;
  }

  // ---------------- main loop ----------------
  private loop = (): void => {
    requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, this.clock.getDelta());
    const time = this.clock.elapsedTime;

    if (this.state === 'playing' && this.world) {
      this.timeLeft -= dt;
      this.scoring.update(dt);
      this.player.update(dt, this.world.obstacles, this.world.halfW, this.world.halfD);
      this.ai.update(
        this.turkeys,
        this.player.position2D,
        this.world,
        LEVELS[this.levelIndex],
        dt
      );
      this.updateEquipment(dt);
      this.updateTarget();

      this.hud.update({
        time: Math.max(0, this.timeLeft),
        score: this.scoring.levelScore,
        combo: this.scoring.combo,
        level: this.levelIndex,
        target: LEVELS[this.levelIndex].targetScore,
        active: this.activeCount(),
        missed: this.scoring.levelMissed,
      });

      if (this.timeLeft <= 0) {
        this.hud.showPrompt(false);
        this.endLevel();
      }
    }

    // turkeys animate even when paused-ish (cheap), but only sim in playing
    for (const t of this.turkeys) t.syncTransform(dt, time);
    this.effects.update(dt);

    // screen shake offset
    if (this.state === 'playing' || this.state === 'paused') {
      const off = this.effects.shakeOffset();
      this.camera.position.add(off);
    }

    this.renderer.render(this.scene, this.camera);
  };

  private onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private shuffle<T>(arr: T[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
