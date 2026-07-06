import {
  COMBO_MAX,
  COMBO_WINDOW,
  PENALTY_HAZARD,
  PENALTY_MISS,
  SCORE_BRONZE,
  SCORE_NORMAL,
} from './levels';

// Tracks score, combo and per-level / per-game stats.
export class Scoring {
  // Per-game totals
  totalScore = 0;
  totalTurkeys = 0;
  totalBronze = 0;
  totalMissed = 0;
  bestCombo = 1;

  // Per-level
  levelScore = 0;
  levelMissed = 0;
  levelBronze = 0;

  combo = 1;
  private comboTimer = 0; // counts down

  startLevel(): void {
    this.levelScore = 0;
    this.levelMissed = 0;
    this.levelBronze = 0;
    this.combo = 1;
    this.comboTimer = 0;
  }

  update(dt: number): void {
    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) {
        this.combo = 1;
      }
    }
  }

  // Returns the points awarded for the flip (after multiplier).
  flip(isBronze: boolean): number {
    // A flip within the window bumps the multiplier.
    if (this.comboTimer > 0) {
      this.combo = Math.min(COMBO_MAX, this.combo + 1);
    } else {
      this.combo = 1;
    }
    this.comboTimer = COMBO_WINDOW;

    const base = isBronze ? SCORE_BRONZE : SCORE_NORMAL;
    const points = base * this.combo;
    this.levelScore += points;
    this.totalScore += points;
    this.totalTurkeys += 1;
    if (isBronze) {
      this.levelBronze += 1;
      this.totalBronze += 1;
    }
    if (this.combo > this.bestCombo) this.bestCombo = this.combo;
    return points;
  }

  miss(): number {
    this.levelMissed += 1;
    this.totalMissed += 1;
    this.levelScore = Math.max(0, this.levelScore + PENALTY_MISS);
    this.totalScore = Math.max(0, this.totalScore + PENALTY_MISS);
    // A miss breaks the combo.
    this.combo = 1;
    this.comboTimer = 0;
    return PENALTY_MISS;
  }

  hazard(): number {
    this.levelScore = Math.max(0, this.levelScore + PENALTY_HAZARD);
    this.totalScore = Math.max(0, this.totalScore + PENALTY_HAZARD);
    return PENALTY_HAZARD;
  }

  // Apply end-of-level bonuses. Returns a breakdown for display.
  applyLevelBonuses(
    reachedTarget: boolean
  ): { label: string; value: number }[] {
    const bonuses: { label: string; value: number }[] = [];
    if (reachedTarget) {
      bonuses.push({ label: 'Target reached', value: 10 });
    }
    if (this.levelMissed < 3) {
      bonuses.push({ label: 'Fewer than 3 misses', value: 5 });
    }
    if (this.levelBronze >= 1) {
      bonuses.push({ label: 'Bronze turkey flipped', value: 5 });
    }
    for (const b of bonuses) {
      this.levelScore += b.value;
      this.totalScore += b.value;
    }
    return bonuses;
  }

  grade(): string {
    const s = this.totalScore;
    if (s >= 180) return 'S';
    if (s >= 140) return 'A';
    if (s >= 100) return 'B';
    if (s >= 70) return 'C';
    return 'D';
  }

  resetGame(): void {
    this.totalScore = 0;
    this.totalTurkeys = 0;
    this.totalBronze = 0;
    this.totalMissed = 0;
    this.bestCombo = 1;
    this.startLevel();
  }
}
