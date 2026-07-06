import { PlayerController } from './PlayerController';

// On-screen touch controls for mobile: a movement joystick (bottom-left),
// a drag-to-look layer (rest of screen), and a FLIP button (bottom-right).
export class MobileControls {
  private player: PlayerController;
  private onFlip: () => void;

  private lookLayer: HTMLDivElement;
  private stick: HTMLDivElement;
  private stickKnob: HTMLDivElement;
  private flipBtn: HTMLDivElement;

  private lookId: number | null = null;
  private lookLast = { x: 0, y: 0 };
  private moveId: number | null = null;
  private moveOrigin = { x: 0, y: 0 };
  private readonly radius = 55;

  active = false;

  constructor(parent: HTMLElement, player: PlayerController, onFlip: () => void) {
    this.player = player;
    this.onFlip = onFlip;

    this.lookLayer = document.createElement('div');
    this.lookLayer.id = 'm-look';

    this.stick = document.createElement('div');
    this.stick.id = 'm-stick';
    this.stickKnob = document.createElement('div');
    this.stickKnob.id = 'm-knob';
    this.stick.appendChild(this.stickKnob);

    this.flipBtn = document.createElement('div');
    this.flipBtn.id = 'm-flip';
    this.flipBtn.textContent = 'FLIP';

    parent.appendChild(this.lookLayer);
    parent.appendChild(this.stick);
    parent.appendChild(this.flipBtn);

    this.setActive(false);
    this.bind();
  }

  setActive(v: boolean): void {
    this.active = v;
    this.lookLayer.style.display = v ? 'block' : 'none';
    this.stick.style.display = v ? 'block' : 'none';
    this.flipBtn.style.display = v ? 'flex' : 'none';
    if (!v) {
      this.player.touchInput.x = 0;
      this.player.touchInput.z = 0;
      this.lookId = null;
      this.moveId = null;
    }
  }

  private bind(): void {
    // ---- look layer (drag to rotate camera) ----
    this.lookLayer.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault();
        if (this.lookId === null) {
          const t = e.changedTouches[0];
          this.lookId = t.identifier;
          this.lookLast = { x: t.clientX, y: t.clientY };
        }
      },
      { passive: false }
    );
    this.lookLayer.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault();
        for (const t of Array.from(e.changedTouches)) {
          if (t.identifier === this.lookId) {
            this.player.applyLook(
              t.clientX - this.lookLast.x,
              t.clientY - this.lookLast.y
            );
            this.lookLast = { x: t.clientX, y: t.clientY };
          }
        }
      },
      { passive: false }
    );
    const endLook = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.lookId) this.lookId = null;
      }
    };
    this.lookLayer.addEventListener('touchend', endLook);
    this.lookLayer.addEventListener('touchcancel', endLook);

    // ---- movement joystick ----
    const stickStart = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const t = e.changedTouches[0];
      this.moveId = t.identifier;
      const rect = this.stick.getBoundingClientRect();
      this.moveOrigin = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      this.updateStick(t.clientX, t.clientY);
    };
    const stickMove = (e: TouchEvent) => {
      e.preventDefault();
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.moveId) this.updateStick(t.clientX, t.clientY);
      }
    };
    const stickEnd = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.moveId) {
          this.moveId = null;
          this.player.touchInput.x = 0;
          this.player.touchInput.z = 0;
          this.stickKnob.style.transform = 'translate(-50%, -50%)';
        }
      }
    };
    this.stick.addEventListener('touchstart', stickStart, { passive: false });
    this.stick.addEventListener('touchmove', stickMove, { passive: false });
    this.stick.addEventListener('touchend', stickEnd);
    this.stick.addEventListener('touchcancel', stickEnd);

    // ---- flip button ----
    const doFlip = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      this.flipBtn.classList.add('pressed');
      setTimeout(() => this.flipBtn.classList.remove('pressed'), 120);
      this.onFlip();
    };
    this.flipBtn.addEventListener('touchstart', doFlip, { passive: false });
    // also respond to click so it works when testing with a mouse
    this.flipBtn.addEventListener('click', doFlip);
  }

  private updateStick(cx: number, cy: number): void {
    let dx = cx - this.moveOrigin.x;
    let dy = cy - this.moveOrigin.y;
    const dist = Math.hypot(dx, dy);
    if (dist > this.radius) {
      dx = (dx / dist) * this.radius;
      dy = (dy / dist) * this.radius;
    }
    this.stickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    // forward is up on screen => negative dy
    this.player.touchInput.x = dx / this.radius;
    this.player.touchInput.z = -dy / this.radius;
  }
}
