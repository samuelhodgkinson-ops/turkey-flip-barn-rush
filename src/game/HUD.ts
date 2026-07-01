import { LevelConfig } from './levels';

export interface HudState {
  time: number;
  score: number;
  combo: number;
  level: number;
  target: number;
  active: number;
  missed: number;
}

export interface FinalData {
  totalScore: number;
  turkeys: number;
  bronze: number;
  missed: number;
  bestCombo: number;
  grade: string;
  won: boolean;
}

// All DOM-based UI: HUD bar, prompts, popups and full-screen panels.
export class HUD {
  private root: HTMLElement;
  private hudBar!: HTMLElement;
  private prompt!: HTMLElement;
  private crosshair!: HTMLElement;
  private overlay!: HTMLElement;
  private overlayContent!: HTMLElement;
  private popups!: HTMLElement;

  // hud field refs
  private fTime!: HTMLElement;
  private fScore!: HTMLElement;
  private fCombo!: HTMLElement;
  private fLevel!: HTMLElement;
  private fTarget!: HTMLElement;
  private fActive!: HTMLElement;
  private fMissed!: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.build();
  }

  private build(): void {
    this.crosshair = document.createElement('div');
    this.crosshair.id = 'crosshair';
    this.crosshair.innerHTML = '<span></span><span></span>';
    this.root.appendChild(this.crosshair);

    this.hudBar = document.createElement('div');
    this.hudBar.id = 'hud';
    this.hudBar.innerHTML = `
      <div class="hud-cell"><label>TIME</label><b id="h-time">60</b></div>
      <div class="hud-cell"><label>SCORE</label><b id="h-score">0</b></div>
      <div class="hud-cell"><label>COMBO</label><b id="h-combo">x1</b></div>
      <div class="hud-cell"><label>LEVEL</label><b id="h-level">1</b></div>
      <div class="hud-cell"><label>TARGET</label><b id="h-target">20</b></div>
      <div class="hud-cell"><label>TURKEYS</label><b id="h-active">15</b></div>
      <div class="hud-cell"><label>MISSED</label><b id="h-missed">0</b></div>`;
    this.root.appendChild(this.hudBar);

    this.prompt = document.createElement('div');
    this.prompt.id = 'prompt';
    this.prompt.textContent = 'Press E to Flip';
    this.prompt.style.display = 'none';
    this.root.appendChild(this.prompt);

    this.popups = document.createElement('div');
    this.popups.id = 'popups';
    this.root.appendChild(this.popups);

    this.overlay = document.createElement('div');
    this.overlay.id = 'overlay';
    this.overlayContent = document.createElement('div');
    this.overlayContent.id = 'overlay-content';
    this.overlay.appendChild(this.overlayContent);
    this.root.appendChild(this.overlay);

    this.fTime = this.q('h-time');
    this.fScore = this.q('h-score');
    this.fCombo = this.q('h-combo');
    this.fLevel = this.q('h-level');
    this.fTarget = this.q('h-target');
    this.fActive = this.q('h-active');
    this.fMissed = this.q('h-missed');

    this.setHudVisible(false);
  }

  private q(id: string): HTMLElement {
    return this.hudBar.querySelector('#' + id) as HTMLElement;
  }

  setHudVisible(v: boolean): void {
    this.hudBar.style.display = v ? 'flex' : 'none';
    this.crosshair.style.display = v ? 'block' : 'none';
  }

  update(s: HudState): void {
    this.fTime.textContent = Math.ceil(s.time).toString();
    this.fTime.classList.toggle('danger', s.time <= 10);
    this.fScore.textContent = s.score.toString();
    this.fCombo.textContent = 'x' + s.combo;
    this.fCombo.classList.toggle('hot', s.combo >= 3);
    this.fLevel.textContent = (s.level + 1).toString();
    this.fTarget.textContent = s.target.toString();
    this.fActive.textContent = s.active.toString();
    this.fMissed.textContent = s.missed.toString();
  }

  showPrompt(v: boolean): void {
    this.prompt.style.display = v ? 'block' : 'none';
  }

  popup(text: string, kind: 'good' | 'bad' | 'bronze'): void {
    const el = document.createElement('div');
    el.className = 'popup ' + kind;
    el.textContent = text;
    // small horizontal jitter so multiples don't overlap
    el.style.left = 50 + (Math.random() * 16 - 8) + '%';
    this.popups.appendChild(el);
    setTimeout(() => el.remove(), 950);
  }

  // ---------- full screen panels ----------
  private show(html: string): void {
    this.overlayContent.innerHTML = html;
    this.overlay.style.display = 'flex';
  }

  hideOverlay(): void {
    this.overlay.style.display = 'none';
  }

  showStart(onStart: () => void): void {
    this.setHudVisible(false);
    this.show(`
      <h1>🦃 TURKEY FLIP<br><span class="accent">BARN RUSH</span></h1>
      <p class="tag">Flip as many turkeys as you can before the clock runs out.</p>
      <div class="instructions">
        <div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> Move &nbsp; · &nbsp; <kbd>Mouse</kbd> Look</div>
        <div><kbd>Shift</kbd> Sprint &nbsp; · &nbsp; <kbd>E</kbd> Flip turkey in range</div>
        <div><kbd>Click</kbd> Lock mouse &nbsp; · &nbsp; <kbd>Esc</kbd> Release</div>
        <div class="hint">Build combos by flipping fast. Hunt the rare <b class="bronze">Bronze Turkeys</b> for 5×.
        Mind the mud, gates and machinery.</div>
      </div>
      <button id="btn-start">START GAME</button>
      <p class="grades">Grades — S:180+ · A:140 · B:100 · C:70 · D:&lt;70</p>
    `);
    this.bind('btn-start', onStart);
  }

  showLevelIntro(level: LevelConfig, onGo: () => void): void {
    this.setHudVisible(false);
    this.show(`
      <h2>LEVEL ${level.index + 1}</h2>
      <h1 class="accent">${level.name}</h1>
      <p class="tag">${level.subtitle}</p>
      <div class="instructions">
        <div>Target score: <b>${level.targetScore}</b></div>
        <div>${level.normalTurkeys} turkeys + ${level.bronzeTurkeys} bronze · 60 seconds</div>
      </div>
      <button id="btn-go">CLICK TO ENTER THE BARN</button>
    `);
    this.bind('btn-go', onGo);
  }

  showLevelComplete(
    level: LevelConfig,
    levelScore: number,
    bonuses: { label: string; value: number }[],
    totalScore: number,
    onNext: () => void
  ): void {
    this.setHudVisible(false);
    const bonusHtml = bonuses.length
      ? bonuses
          .map((b) => `<div class="bonus">+${b.value} &nbsp;${b.label}</div>`)
          .join('')
      : '<div class="bonus muted">No bonuses</div>';
    this.show(`
      <h2 class="win">LEVEL ${level.index + 1} COMPLETE!</h2>
      <div class="instructions">
        <div>Level score: <b>${levelScore}</b></div>
        ${bonusHtml}
        <div class="total">Total score: <b>${totalScore}</b></div>
      </div>
      <button id="btn-next">NEXT LEVEL ▶</button>
    `);
    this.bind('btn-next', onNext);
  }

  showLevelFail(
    level: LevelConfig,
    levelScore: number,
    target: number,
    onRetry: () => void,
    onRestart: () => void
  ): void {
    this.setHudVisible(false);
    this.show(`
      <h2 class="lose">LEVEL ${level.index + 1} FAILED</h2>
      <p class="tag">You scored <b>${levelScore}</b> but needed <b>${target}</b>.</p>
      <div class="btn-row">
        <button id="btn-retry">RETRY LEVEL</button>
        <button id="btn-restart" class="secondary">RESTART GAME</button>
      </div>
    `);
    this.bind('btn-retry', onRetry);
    this.bind('btn-restart', onRestart);
  }

  showFinal(data: FinalData, onRestart: () => void): void {
    this.setHudVisible(false);
    this.show(`
      <h2 class="${data.won ? 'win' : 'lose'}">
        ${data.won ? 'BARN CLEARED!' : 'GAME OVER'}
      </h2>
      <div class="grade-badge grade-${data.grade}">${data.grade}</div>
      <div class="instructions results">
        <div>Total score <b>${data.totalScore}</b></div>
        <div>Turkeys flipped <b>${data.turkeys}</b></div>
        <div>Bronze turkeys <b>${data.bronze}</b></div>
        <div>Missed attempts <b>${data.missed}</b></div>
        <div>Best combo <b>x${data.bestCombo}</b></div>
      </div>
      <button id="btn-again">PLAY AGAIN</button>
    `);
    this.bind('btn-again', onRestart);
  }

  private bind(id: string, cb: () => void): void {
    const el = this.overlayContent.querySelector('#' + id);
    if (el) el.addEventListener('click', cb);
  }
}
