/* ==============================
   Player — Stats & State
   ============================== */

const Player = {
  name: 'Elena',
  stats: { courage: 5, streetSmarts: 5, stamina: 10 },
  maxStats: { courage: 10, streetSmarts: 10, stamina: 15 },
  decisions: [],

  init(name) {
    this.name = name || 'Elena';
    this.stats = { courage: 5, streetSmarts: 5, stamina: 10 };
    this.decisions = [];
  },

  checkStat(stat, difficulty) {
    const roll = Math.floor(Math.random() * 6) + 1;
    const total = this.stats[stat] + roll;
    return {
      success: total >= difficulty,
      roll: roll,
      total: total,
      needed: difficulty,
      stat: stat,
      statValue: this.stats[stat]
    };
  },

  modifyStat(stat, amount) {
    const old = this.stats[stat];
    this.stats[stat] = Math.max(0, Math.min(this.maxStats[stat], this.stats[stat] + amount));
    return {
      stat: stat,
      old: old,
      current: this.stats[stat],
      change: this.stats[stat] - old
    };
  },

  isExhausted() {
    return this.stats.stamina <= 0;
  },

  addDecision(key) {
    if (!this.decisions.includes(key)) {
      this.decisions.push(key);
    }
  },

  hasDecision(key) {
    return this.decisions.includes(key);
  },

  getAverageStats() {
    return (this.stats.courage + this.stats.streetSmarts + this.stats.stamina / 1.5) / 3;
  },

  toJSON() {
    return {
      name: this.name,
      stats: { ...this.stats },
      decisions: [...this.decisions]
    };
  },

  fromJSON(data) {
    this.name = data.name;
    this.stats = { ...data.stats };
    this.decisions = [...data.decisions];
  }
};
