/* ==============================
   UI — Rendering & Animations
   ============================== */

const UI = {
  elements: {},
  typewriterTimer: null,
  isTyping: false,
  typewriterResolve: null,

  init() {
    this.elements = {
      app: document.getElementById('app'),
      // Screens
      introScreen: document.getElementById('intro-screen'),
      gameScreen: document.getElementById('game-screen'),
      endingScreen: document.getElementById('ending-screen'),
      // Intro
      introNarrative: document.getElementById('intro-narrative'),
      playerName: document.getElementById('player-name'),
      startBtn: document.getElementById('start-btn'),
      // HUD
      courageValue: document.getElementById('courage-value'),
      streetSmartsValue: document.getElementById('streetSmarts-value'),
      staminaValue: document.getElementById('stamina-value'),
      courageFill: document.getElementById('courage-fill'),
      streetSmartsFill: document.getElementById('streetSmarts-fill'),
      staminaFill: document.getElementById('stamina-fill'),
      progressFill: document.getElementById('progress-fill'),
      progressText: document.getElementById('progress-text'),
      // Narrative
      encounterTitle: document.getElementById('encounter-title'),
      encounterText: document.getElementById('encounter-text'),
      choices: document.getElementById('choices'),
      // Resolution
      resolution: document.getElementById('resolution'),
      resolutionText: document.getElementById('resolution-text'),
      statChanges: document.getElementById('stat-changes'),
      continueBtn: document.getElementById('continue-btn'),
      // Ending
      endingTitle: document.getElementById('ending-title'),
      endingText: document.getElementById('ending-text'),
      endingStats: document.getElementById('ending-stats'),
      restartBtn: document.getElementById('restart-btn')
    };
  },

  // ---- Screen Management ----

  showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    const target = document.getElementById(screenId);

    screens.forEach(s => {
      if (s === target) return;
      s.classList.remove('visible');
      s.classList.remove('failure-ending');
      setTimeout(() => s.classList.remove('active'), 400);
    });

    setTimeout(() => {
      target.classList.add('active');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          target.classList.add('visible');
        });
      });
    }, screens[0] && screens[0].classList.contains('visible') ? 400 : 50);
  },

  // ---- Intro ----

  showIntro(text) {
    this.showScreen('intro-screen');
    this.elements.introNarrative.textContent = '';
    this.elements.playerName.value = '';

    setTimeout(() => {
      this.typewrite(this.elements.introNarrative, text, 25);
    }, 600);
  },

  // ---- Encounter ----

  showEncounter(encounter, block, totalBlocks) {
    this.showScreen('game-screen');
    this.elements.resolution.classList.add('hidden');
    this.elements.choices.innerHTML = '';
    this.elements.encounterTitle.textContent = '';
    this.elements.encounterText.textContent = '';

    this.updateProgress(block, totalBlocks);
    this.updateStats(Player.stats, []);

    setTimeout(() => {
      this.elements.encounterTitle.textContent = encounter.title;
      this.elements.encounterTitle.classList.add('fade-in');

      this.typewrite(this.elements.encounterText, encounter.text, 22, () => {
        this.showChoices(encounter);
      });
    }, 500);
  },

  showChoices(encounter) {
    const choicesData = Encounters.getChoicesForEncounter(encounter, Player);
    this.elements.choices.innerHTML = '';

    choicesData.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      if (choice.isHighRisk) btn.classList.add('high-risk');
      btn.dataset.index = choice.index;

      let html = choice.text;
      if (choice.requirementText) {
        const cls = choice.requirementText.met ? 'met' : '';
        html += `<span class="choice-stat-req ${cls}">${choice.requirementText.text}</span>`;
      }
      btn.innerHTML = html;

      if (!choice.available) {
        btn.classList.add('disabled');
        btn.setAttribute('aria-disabled', 'true');
      }

      this.elements.choices.appendChild(btn);

      // Stagger fade-in
      setTimeout(() => btn.classList.add('visible'), 100 + i * 120);
    });
  },

  // ---- Resolution ----

  showResolution(result, isExhausted) {
    this.elements.choices.innerHTML = '';
    this.elements.resolution.classList.remove('hidden');
    this.elements.resolution.classList.add('fade-in');
    this.elements.resolutionText.textContent = '';
    this.elements.statChanges.innerHTML = '';

    // Check result text
    let prefix = '';
    if (result.checkResult) {
      if (result.checkResult.success) {
        prefix = '';
      } else {
        prefix = '';
      }
    }

    this.typewrite(this.elements.resolutionText, prefix + result.text, 22, () => {
      this.showStatChangeTags(result.changes);
      this.updateStats(Player.stats, result.changes);
      this.elements.continueBtn.textContent = isExhausted ? 'Continue...' :
        (Game.currentBlock >= Game.totalBlocks ? 'Almost home...' : 'Continue');
    });
  },

  showStatChangeTags(changes) {
    this.elements.statChanges.innerHTML = '';
    changes.forEach(c => {
      const tag = document.createElement('span');
      const isPositive = c.change > 0;
      tag.className = `stat-change-tag ${isPositive ? 'positive' : 'negative'}`;
      const name = Encounters.formatStatName(c.stat);
      tag.textContent = `${name} ${isPositive ? '+' : ''}${c.change}`;
      this.elements.statChanges.appendChild(tag);
    });
  },

  // ---- Ending ----

  showEnding(ending, player) {
    const isFailure = !!ending.isFailure;
    const endingScreen = document.getElementById('ending-screen');

    if (isFailure) {
      endingScreen.classList.add('failure-ending');
    } else {
      endingScreen.classList.remove('failure-ending');
    }

    this.showScreen('ending-screen');
    this.elements.endingTitle.textContent = '';
    this.elements.endingText.textContent = '';
    this.elements.endingStats.innerHTML = '';

    const initialDelay = isFailure ? 1800 : 600;
    const typeSpeed = isFailure ? 40 : 28;

    setTimeout(() => {
      this.elements.endingTitle.textContent = ending.title;
      this.elements.endingTitle.classList.add('fade-in');

      this.typewrite(this.elements.endingText, ending.text, typeSpeed, () => {
        this.showEndingStats(player);
      });
    }, initialDelay);
  },

  showEndingStats(player) {
    const stats = this.elements.endingStats;
    const kindCount = player.decisions.filter(d => KIND_DECISIONS.includes(d)).length;

    stats.innerHTML = `
      <div class="stat-line">Courage: ${player.stats.courage} &middot; Street-Smarts: ${player.stats.streetSmarts} &middot; Stamina: ${player.stats.stamina}</div>
      <div class="stat-line">Blocks walked: ${Game.currentBlock > Game.totalBlocks ? Game.totalBlocks : Game.currentBlock} of ${Game.totalBlocks}</div>
      <div class="stat-line">Kind acts: ${kindCount}</div>
    `;
    stats.classList.add('fade-in');
  },

  // ---- HUD Updates ----

  updateStats(stats, changes) {
    const update = (stat, max) => {
      const val = this.elements[stat + 'Value'];
      const fill = this.elements[stat + 'Fill'];
      val.textContent = stats[stat];
      fill.style.width = (stats[stat] / max * 100) + '%';

      // Flash animation for changes
      const change = changes.find(c => c.stat === stat);
      if (change) {
        const cls = change.change > 0 ? 'flash-up' : 'flash-down';
        val.classList.add(cls);
        setTimeout(() => val.classList.remove(cls), 1000);
      }
    };

    update('courage', Player.maxStats.courage);
    update('streetSmarts', Player.maxStats.streetSmarts);
    update('stamina', Player.maxStats.stamina);
  },

  updateProgress(current, total) {
    const pct = ((current - 1) / total) * 100;
    this.elements.progressFill.style.width = pct + '%';
    this.elements.progressText.textContent = `Block ${current} of ${total}`;
  },

  // ---- Typewriter ----

  typewrite(element, text, speed, callback) {
    this.skipTypewriter();
    element.textContent = '';
    this.isTyping = true;

    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';

    const type = () => {
      if (i < text.length) {
        element.textContent = text.substring(0, i + 1);
        element.appendChild(cursor);

        // Vary speed: pause longer after punctuation
        let delay = speed;
        const char = text[i];
        if (char === '.' || char === '!' || char === '?') delay = speed * 4;
        else if (char === ',' || char === ';' || char === ':') delay = speed * 2;
        else if (char === '\u2014') delay = speed * 3;
        else if (char === '\n') delay = speed * 3;

        i++;
        this.typewriterTimer = setTimeout(type, delay);
      } else {
        this.isTyping = false;
        setTimeout(() => {
          if (cursor.parentNode) cursor.remove();
        }, 1500);
        if (callback) callback();
      }
    };

    // Allow click-to-skip
    const skipHandler = () => {
      if (this.isTyping) {
        this.skipTypewriter();
        element.textContent = text;
        if (cursor.parentNode) cursor.remove();
        this.isTyping = false;
        if (callback) callback();
      }
      element.removeEventListener('click', skipHandler);
    };
    element.addEventListener('click', skipHandler);

    type();
  },

  skipTypewriter() {
    if (this.typewriterTimer) {
      clearTimeout(this.typewriterTimer);
      this.typewriterTimer = null;
    }
    this.isTyping = false;
  },

  // ---- Scroll helper ----

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
