import * as THREE from 'three';
import { ObstacleSpec } from './levels';

const PLAYER_RADIUS = 0.45;
const EYE_HEIGHT = 1.7;
const WALK_SPEED = 7.6;
const SPRINT_SPEED = 12.0;
const MUD_FACTOR = 0.45;
const ACCEL = 60;
const FRICTION = 12;

export class PlayerController {
  camera: THREE.PerspectiveCamera;
  pos = new THREE.Vector3(0, EYE_HEIGHT, 0);
  vel = new THREE.Vector2(); // xz velocity
  yaw = 0;
  pitch = 0;
  enabled = false;
  onMud = false;
  sprinting = false;

  private keys: Record<string, boolean> = {};
  private domElement: HTMLElement;
  private mouseSensitivity = 0.0022;

  // Touch controls: virtual joystick axes (x=strafe, z=forward) + look sens.
  touchInput = { x: 0, z: 0 };
  touchSensitivity = 0.005;
  touchMode = false;

  // Applies a look delta from a touch drag (pixels).
  applyLook(dx: number, dy: number): void {
    this.yaw -= dx * this.touchSensitivity;
    this.pitch -= dy * this.touchSensitivity;
    const lim = Math.PI / 2 - 0.05;
    this.pitch = Math.max(-lim, Math.min(lim, this.pitch));
  }

  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    this.camera = camera;
    this.domElement = domElement;
    this.bindEvents();
  }

  private bindEvents(): void {
    document.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      // stop arrow keys / space from scrolling the page during play
      if (
        this.enabled &&
        (e.code.startsWith('Arrow') || e.code === 'Space')
      ) {
        e.preventDefault();
      }
    });
    document.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.enabled) return;
      this.yaw -= e.movementX * this.mouseSensitivity;
      this.pitch -= e.movementY * this.mouseSensitivity;
      const lim = Math.PI / 2 - 0.05;
      this.pitch = Math.max(-lim, Math.min(lim, this.pitch));
    });
    document.addEventListener('pointerlockchange', () => {
      this.enabled = document.pointerLockElement === this.domElement;
    });
  }

  requestLock(): void {
    this.domElement.requestPointerLock();
  }

  releaseLock(): void {
    if (document.pointerLockElement) document.exitPointerLock();
  }

  reset(start: THREE.Vector2): void {
    this.pos.set(start.x, EYE_HEIGHT, start.y);
    this.vel.set(0, 0);
    // face toward barn centre
    this.yaw = Math.atan2(-start.x, -start.y) + Math.PI;
    this.yaw = Math.atan2(0 - start.x, 0 - start.y);
    this.pitch = 0;
  }

  get position2D(): THREE.Vector2 {
    return new THREE.Vector2(this.pos.x, this.pos.z);
  }

  // forward direction on the XZ plane
  forwardDir(): THREE.Vector2 {
    return new THREE.Vector2(Math.sin(this.yaw), Math.cos(this.yaw));
  }

  update(
    dt: number,
    obstacles: ObstacleSpec[],
    halfW: number,
    halfD: number
  ): void {
    // ---- desired movement direction in local space ----
    let ix = 0;
    let iz = 0;
    if (this.keys['KeyW']) iz += 1;
    if (this.keys['KeyS']) iz -= 1;
    // Arrow up/down are swapped per request: Up = back, Down = forward.
    if (this.keys['ArrowUp']) iz -= 1;
    if (this.keys['ArrowDown']) iz += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) ix -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) ix += 1;
    // add virtual-joystick input (touch)
    ix += this.touchInput.x;
    iz += this.touchInput.z;
    this.sprinting = !!(this.keys['ShiftLeft'] || this.keys['ShiftRight']);

    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);
    // forward = (sin, cos); right = (cos, -sin)
    let dx = sin * iz + cos * ix;
    let dz = cos * iz - sin * ix;
    const len = Math.hypot(dx, dz);
    if (len > 0) {
      dx /= len;
      dz /= len;
    }

    let maxSpeed = this.sprinting ? SPRINT_SPEED : WALK_SPEED;
    if (this.onMud) maxSpeed *= MUD_FACTOR;

    // accelerate toward desired velocity
    const targetX = dx * maxSpeed;
    const targetZ = dz * maxSpeed;
    if (len > 0) {
      this.vel.x += (targetX - this.vel.x) * Math.min(1, ACCEL * dt * 0.05);
      this.vel.y += (targetZ - this.vel.y) * Math.min(1, ACCEL * dt * 0.05);
    } else {
      // friction
      const f = Math.max(0, 1 - FRICTION * dt * 0.1);
      this.vel.multiplyScalar(f);
    }

    // ---- integrate with axis-separated collision ----
    let nx = this.pos.x + this.vel.x * dt;
    let nz = this.pos.z + this.vel.y * dt;

    nx = this.resolveAxis(nx, this.pos.z, true, obstacles);
    nz = this.resolveAxis(nx, nz, false, obstacles);

    // clamp to barn
    const bx = halfW - 0.8;
    const bz = halfD - 0.8;
    nx = Math.max(-bx, Math.min(bx, nx));
    nz = Math.max(-bz, Math.min(bz, nz));

    this.pos.x = nx;
    this.pos.z = nz;

    // ---- mud check ----
    this.onMud = false;
    for (const o of obstacles) {
      if (o.kind !== 'mud') continue;
      if (
        Math.abs(this.pos.x - o.x) < o.w / 2 &&
        Math.abs(this.pos.z - o.z) < o.d / 2
      ) {
        this.onMud = true;
        break;
      }
    }

    // ---- apply to camera ----
    this.camera.position.copy(this.pos);
    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(euler);
  }

  // Resolve one axis against solid AABBs (treat player as a circle).
  private resolveAxis(
    x: number,
    z: number,
    movingX: boolean,
    obstacles: ObstacleSpec[]
  ): number {
    for (const o of obstacles) {
      if (!o.solid) continue;
      const minX = o.x - o.w / 2 - PLAYER_RADIUS;
      const maxX = o.x + o.w / 2 + PLAYER_RADIUS;
      const minZ = o.z - o.d / 2 - PLAYER_RADIUS;
      const maxZ = o.z + o.d / 2 + PLAYER_RADIUS;
      if (x > minX && x < maxX && z > minZ && z < maxZ) {
        if (movingX) {
          // push out along x toward the nearer face
          if (this.vel.x > 0) {
            x = minX;
          } else if (this.vel.x < 0) {
            x = maxX;
          }
          this.vel.x = 0;
        } else {
          if (this.vel.y > 0) {
            z = minZ;
          } else if (this.vel.y < 0) {
            z = maxZ;
          }
          this.vel.y = 0;
        }
      }
    }
    return movingX ? x : z;
  }
}
