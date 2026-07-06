import { LevelConfig } from './levels';
import { Leaderboard, ScoreEntry } from './Leaderboard';

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
  flipped: number;
  golden: number;
  missed: number;
  bestCombo: number;
  grade: string;
  won: boolean;
  levelsCleared: number;
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

  private fTime!: HTMLElement;
  private fScore!: HTMLElement;
  private fCombo!: HTMLElement;
  private fLevel!: HTMLElement;
  private fTarget!: HTMLElement;
  private fActive!: HTMLElement;
  private fActiveLabel!: HTMLElement;
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
      <div class="hud-cell"><label id="h-active-label">TURKEYS</label><b id="h-active">15</b></div>
      <div class="hud-cell"><label>MISSED</label><b id="h-missed">0</b></div>`;
    this.root.appendChild(this.hudBar);

    this.prompt = document.createElement('div');
    this.prompt.id = 'prompt';
    this.prompt.textContent = 'Left-click or E to Flip';
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
    this.fActiveLabel = this.q('h-active-label');
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

  setCritterLabel(label: string): void {
    this.fActiveLabel.textContent = label;
  }

  setFlipVerb(verb: string): void {
    this.prompt.textContent = `Left-click or E to ${verb}`;
  }

  update(s: HudState): void {
    this.fTime.textContent = Math.ceil(s.time).toString();
    this.fTime.classList.toggle('danger', s.time <= 10);
    this.fScore.textContent = s.score.toString();
    this.fCombo.textContent = 'x' + s.combo;
    this.fCombo.classList.toggle('hot', s.combo >= 3);
    this.fLevel.textContent = s.level + 1 + '/7';
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
      <h1>🦃 FLIP RUSH<br><span class="accent">BARN &amp; BEYOND</span></h1>
      <p class="tag">Flip as many critters as you can across 7 wild levels — turkeys,
      hens, chickens, salmon, shrimp, pigs and... office staff.</p>
      <div class="instructions">
        <div><kbd>↑</kbd> Forward &nbsp; <kbd>↓</kbd> Back &nbsp; <kbd>←</kbd><kbd>→</kbd> Strafe &nbsp;(or <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>) &nbsp; · &nbsp; <kbd>Mouse</kbd> Look</div>
        <div><kbd>Left-click</kbd> or <kbd>E</kbd> Flip when in range &nbsp; · &nbsp; <kbd>Shift</kbd> Sprint</div>
        <div><kbd>Click</kbd> Lock mouse &nbsp; · &nbsp; <kbd>Esc</kbd> Release</div>
        <div class="hint">Build combos by flipping fast (up to 5×). Hunt the rare
        <b class="bronze">Golden</b> critters for 5 points. Score carries across all
        levels — top the <b>leaderboard</b> at the end. Mind mud, gates and machinery.</div>
      </div>
      <button id="btn-start">START GAME</button>
      <p class="grades">Grades — S:180+ · A:140 · B:100 · C:70 · D:&lt;70</p>
    `);
    this.bind('btn-start', onStart);
  }

  showLevelIntro(level: LevelConfig, onGo: () => void): void {
    this.setHudVisible(false);
    this.show(`
      <h2>LEVEL ${level.index + 1} / 7</h2>
      <h1 class="accent">${level.name}</h1>
      <p class="tag">${level.subtitle}</p>
      <div class="instructions">
        <div>Target this level: <b>${level.targetScore}</b></div>
        <div>${level.normalCount} ${level.critterLabel.toLowerCase()} + ${level.bronzeCount} ${level.specialLabel}${level.bronzeCount > 1 ? 's' : ''} · 60 seconds</div>
      </div>
      <button id="btn-go">CLICK TO ENTER</button>
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
        <div class="total">Running total: <b>${totalScore}</b></div>
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

  showFinal(
    data: FinalData,
    leaderboard: Leaderboard,
    onRestart: () => void
  ): void {
    this.setHudVisible(false);
    const qualifies = leaderboard.qualifies(data.totalScore);
    this.show(`
      <h2 class="${data.won ? 'win' : 'lose'}">
        ${data.won ? 'RUN COMPLETE!' : 'GAME OVER'}
      </h2>
      <div class="grade-badge grade-${data.grade}">${data.grade}</div>
      <div class="instructions results">
        <div>Total score <b>${data.totalScore}</b></div>
        <div>Levels cleared <b>${data.levelsCleared} / 7</b></div>
        <div>Critters flipped <b>${data.flipped}</b></div>
        <div>Golden flipped <b>${data.golden}</b></div>
        <div>Missed attempts <b>${data.missed}</b></div>
        <div>Best combo <b>x${data.bestCombo}</b></div>
      </div>
      <div id="lb-section"></div>
      <button id="btn-again">PLAY AGAIN</button>
    `);
    this.bind('btn-again', onRestart);

    const section = this.overlayContent.querySelector('#lb-section') as HTMLElement;
    if (qualifies) {
      section.innerHTML = `
        <h3 class="lb-title">🏆 NEW HIGH SCORE — ENTER YOUR NAME</h3>
        <div class="name-row">
          <input id="lb-name" maxlength="12" placeholder="AAA" autocomplete="off" />
          <button id="lb-save">SAVE</button>
        </div>
        <div id="lb-table"></div>`;
      const input = section.querySelector('#lb-name') as HTMLInputElement;
      const save = section.querySelector('#lb-save') as HTMLButtonElement;
      const table = section.querySelector('#lb-table') as HTMLElement;
      table.innerHTML = this.renderTable(leaderboard.load(), -1);
      setTimeout(() => input.focus(), 50);
      const doSave = () => {
        const { list, rank } = leaderboard.add(input.value, data.totalScore);
        section.querySelector('.name-row')?.remove();
        const title = section.querySelector('.lb-title') as HTMLElement;
        if (title) title.textContent = '🏆 LEADERBOARD';
        table.innerHTML = this.renderTable(list, rank);
      };
      save.addEventListener('click', doSave);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSave();
      });
    } else {
      section.innerHTML = `
        <h3 class="lb-title">🏆 LEADERBOARD</h3>
        <div id="lb-table">${this.renderTable(leaderboard.load(), -1)}</div>`;
    }
  }

  private renderTable(list: ScoreEntry[], highlight: number): string {
    if (!list.length) return '<div class="lb-empty">No scores yet — be the first!</div>';
    const rows = list
      .map(
        (e, i) => `
        <div class="lb-row${i === highlight ? ' me' : ''}">
          <span class="lb-rank">${i + 1}</span>
          <span class="lb-name">${this.escape(e.name)}</span>
          <span class="lb-score">${e.score}</span>
        </div>`
      )
      .join('');
    return `<div class="lb-table">${rows}</div>`;
  }

  private escape(s: string): string {
    return s.replace(/[<>&"]/g, (c) =>
      c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '&' ? '&amp;' : '&quot;'
    );
  }

  private bind(id: string, cb: () => void): void {
    const el = this.overlayContent.querySelector('#' + id);
    if (el) el.addEventListener('click', cb);
  }
}
