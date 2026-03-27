/* ==============================
   Game — State & Core Loop
   ============================== */

const Game = {
  phase: 'intro',
  currentBlock: 0,
  totalBlocks: TOTAL_BLOCKS,
  currentEncounter: null,
  usedEncounters: [],
  onUpdate: null,

  init() {
    this.phase = 'intro';
    this.currentBlock = 0;
    this.currentEncounter = null;
    this.usedEncounters = [];
    Player.init();
    this.clearSave();
  },

  start(playerName) {
    Player.init(playerName);
    this.phase = 'playing';
    this.currentBlock = 1;
    this.usedEncounters = [];
    this.beginBlock();
  },

  beginBlock() {
    const encounter = Encounters.selectRandom(this.usedEncounters);
    if (!encounter) {
      this.endGame();
      return;
    }
    this.currentEncounter = encounter;
    this.usedEncounters.push(encounter.id);
    this.save();

    if (this.onUpdate) {
      this.onUpdate('encounter', {
        encounter,
        block: this.currentBlock,
        totalBlocks: this.totalBlocks
      });
    }
  },

  resolveChoice(choiceIndex) {
    if (!this.currentEncounter) return;

    const result = Encounters.resolveChoice(
      this.currentEncounter, choiceIndex, Player
    );

    this.save();

    if (this.onUpdate) {
      this.onUpdate('resolution', {
        result,
        player: Player,
        isExhausted: Player.isExhausted()
      });
    }
  },

  nextBlock() {
    if (Player.isExhausted()) {
      this.endGame();
      return;
    }

    this.currentBlock++;

    if (this.currentBlock > this.totalBlocks) {
      this.endGame();
      return;
    }

    this.beginBlock();
  },

  endGame() {
    this.phase = 'ending';
    const ending = this.getEnding();
    this.clearSave();

    if (this.onUpdate) {
      this.onUpdate('ending', { ending, player: Player });
    }
  },

  getEnding() {
    if (Player.isExhausted()) {
      return EndingsData.failure;
    }

    // Check for kind ending
    const kindCount = Player.decisions.filter(d => KIND_DECISIONS.includes(d)).length;
    if (kindCount >= KIND_THRESHOLD) {
      return EndingsData.kind;
    }

    const avg = Player.getAverageStats();
    if (avg >= 6.5) return EndingsData.triumphant;
    if (avg >= 4) return EndingsData.relieved;
    return EndingsData.barely;
  },

  save() {
    try {
      const state = {
        phase: this.phase,
        currentBlock: this.currentBlock,
        usedEncounters: [...this.usedEncounters],
        currentEncounterId: this.currentEncounter ? this.currentEncounter.id : null,
        player: Player.toJSON()
      };
      localStorage.setItem('gettingHome_save', JSON.stringify(state));
    } catch (e) {
      // localStorage unavailable
    }
  },

  load() {
    try {
      const raw = localStorage.getItem('gettingHome_save');
      if (!raw) return false;

      const state = JSON.parse(raw);
      this.phase = state.phase;
      this.currentBlock = state.currentBlock;
      this.usedEncounters = state.usedEncounters || [];
      Player.fromJSON(state.player);

      if (state.currentEncounterId) {
        this.currentEncounter = EncounterData.find(e => e.id === state.currentEncounterId) || null;
      }

      return true;
    } catch (e) {
      return false;
    }
  },

  clearSave() {
    try {
      localStorage.removeItem('gettingHome_save');
    } catch (e) {
      // localStorage unavailable
    }
  },

  resumeFromSave() {
    if (this.phase === 'playing' && this.currentEncounter) {
      if (this.onUpdate) {
        this.onUpdate('encounter', {
          encounter: this.currentEncounter,
          block: this.currentBlock,
          totalBlocks: this.totalBlocks
        });
      }
      return true;
    }
    return false;
  }
};
