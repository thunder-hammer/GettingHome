/* ==============================
   Main — Initialization & Events
   ============================== */

document.addEventListener('DOMContentLoaded', () => {
  UI.init();

  // Wire up game state callbacks
  Game.onUpdate = (event, data) => {
    switch (event) {
      case 'encounter':
        UI.showEncounter(data.encounter, data.block, data.totalBlocks);
        break;
      case 'resolution':
        UI.showResolution(data.result, data.isExhausted);
        break;
      case 'ending':
        UI.showEnding(data.ending, data.player);
        break;
    }
  };

  // Check for saved game
  const hasSave = Game.load();
  if (hasSave && Game.phase === 'playing') {
    showResumePrompt();
  } else {
    showFreshIntro();
  }

  // ---- Start Button ----
  document.getElementById('start-btn').addEventListener('click', () => {
    const name = document.getElementById('player-name').value.trim();
    Game.start(name || 'Elena');
  });

  // Handle enter key on name input
  document.getElementById('player-name').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('start-btn').click();
    }
  });

  // ---- Choice Buttons (event delegation) ----
  document.getElementById('choices').addEventListener('click', (e) => {
    const btn = e.target.closest('.choice-btn');
    if (!btn || btn.classList.contains('disabled')) return;

    // Disable all choice buttons immediately
    document.querySelectorAll('.choice-btn').forEach(b => {
      b.classList.add('disabled');
      b.setAttribute('aria-disabled', 'true');
    });

    const index = parseInt(btn.dataset.index, 10);
    Game.resolveChoice(index);
  });

  // ---- Continue Button ----
  document.getElementById('continue-btn').addEventListener('click', () => {
    UI.scrollToTop();
    setTimeout(() => Game.nextBlock(), 300);
  });

  // ---- Restart Button ----
  document.getElementById('restart-btn').addEventListener('click', () => {
    Game.init();
    showFreshIntro();
  });

  // ---- Helpers ----

  function showFreshIntro() {
    Game.init();
    UI.showIntro(INTRO_TEXT);
  }

  function showResumePrompt() {
    UI.showScreen('intro-screen');
    const introContent = document.querySelector('.intro-content');
    const narrative = document.getElementById('intro-narrative');

    narrative.textContent = `You have a saved game — Block ${Game.currentBlock} of ${Game.totalBlocks}.\n\nResume your walk, or start over?`;

    // Hide name input for resume
    const nameGroup = document.querySelector('.name-input-group');
    nameGroup.style.display = 'none';

    const startBtn = document.getElementById('start-btn');
    startBtn.textContent = 'Resume';

    // Add a "New Game" button
    const newBtn = document.createElement('button');
    newBtn.className = 'btn';
    newBtn.textContent = 'Start Over';
    newBtn.style.marginTop = '0.75rem';
    startBtn.parentNode.insertBefore(newBtn, startBtn.nextSibling);

    // Make screen visible
    setTimeout(() => {
      document.getElementById('intro-screen').classList.add('visible');
    }, 50);

    startBtn.onclick = () => {
      cleanup();
      Game.resumeFromSave();
    };

    newBtn.onclick = () => {
      cleanup();
      showFreshIntro();
    };

    function cleanup() {
      nameGroup.style.display = '';
      startBtn.textContent = 'Start Walking';
      startBtn.onclick = null;
      if (newBtn.parentNode) newBtn.remove();

      // Re-attach normal start handler
      startBtn.addEventListener('click', () => {
        const name = document.getElementById('player-name').value.trim();
        Game.start(name || 'Elena');
      }, { once: true });
    }
  }
});
