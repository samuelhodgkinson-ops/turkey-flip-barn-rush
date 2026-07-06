export interface ScoreEntry {
  name: string;
  score: number;
  date: string;
}

// Persistent local high-score table (top scores stored in localStorage).
export class Leaderboard {
  private key = 'tfbr_leaderboard_v1';
  private max = 10;

  load(): ScoreEntry[] {
    try {
      const raw = localStorage.getItem(this.key);
      if (!raw) return [];
      const arr = JSON.parse(raw) as ScoreEntry[];
      if (!Array.isArray(arr)) return [];
      return arr
        .filter((e) => typeof e.score === 'number' && typeof e.name === 'string')
        .sort((a, b) => b.score - a.score)
        .slice(0, this.max);
    } catch {
      return [];
    }
  }

  // Adds an entry, returns { list, rank } where rank is 0-based index (or -1).
  add(name: string, score: number): { list: ScoreEntry[]; rank: number } {
    const clean = (name || 'ANON').trim().slice(0, 12).toUpperCase() || 'ANON';
    const entry: ScoreEntry = {
      name: clean,
      score,
      date: new Date().toISOString().slice(0, 10),
    };
    const list = this.load();
    list.push(entry);
    list.sort((a, b) => b.score - a.score);
    const trimmed = list.slice(0, this.max);
    try {
      localStorage.setItem(this.key, JSON.stringify(trimmed));
    } catch {
      /* storage may be unavailable; ignore */
    }
    // find rank of this exact entry
    let rank = -1;
    for (let i = 0; i < trimmed.length; i++) {
      if (
        trimmed[i].name === entry.name &&
        trimmed[i].score === entry.score &&
        trimmed[i].date === entry.date
      ) {
        rank = i;
        break;
      }
    }
    return { list: trimmed, rank };
  }

  // Would this score make the table?
  qualifies(score: number): boolean {
    const list = this.load();
    return list.length < this.max || score > list[list.length - 1].score;
  }
}
