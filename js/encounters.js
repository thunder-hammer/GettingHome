/* ==============================
   Encounters — Selection & Resolution
   ============================== */

const Encounters = {
  getAvailable(usedIds) {
    return EncounterData.filter(e => !usedIds.includes(e.id));
  },

  selectRandom(usedIds) {
    const available = this.getAvailable(usedIds);
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  },

  getChoicesForEncounter(encounter, player) {
    return encounter.choices.map((choice, index) => {
      const available = this.isChoiceAvailable(choice, player);
      const requirementText = this.getRequirementText(choice, player);
      return {
        index,
        text: choice.text,
        available,
        requirementText,
        hasStatCheck: !!choice.statCheck
      };
    });
  },

  isChoiceAvailable(choice, player) {
    if (!choice.requires) return true;
    return player.stats[choice.requires.stat] >= choice.requires.min;
  },

  getRequirementText(choice, player) {
    if (choice.requires) {
      const statName = this.formatStatName(choice.requires.stat);
      const met = player.stats[choice.requires.stat] >= choice.requires.min;
      return { text: `Requires ${statName} ${choice.requires.min}+`, met };
    }
    if (choice.statCheck) {
      const statName = this.formatStatName(choice.statCheck.stat);
      return { text: `${statName} check`, met: true };
    }
    return null;
  },

  resolveChoice(encounter, choiceIndex, player) {
    const choice = encounter.choices[choiceIndex];
    let outcome;
    let checkResult = null;

    if (choice.statCheck) {
      checkResult = player.checkStat(choice.statCheck.stat, choice.statCheck.difficulty);
      outcome = checkResult.success ? choice.success : choice.failure;
    } else {
      outcome = choice.success;
    }

    // Apply stat changes
    const changes = [];
    if (outcome.statChanges) {
      for (const [stat, amount] of Object.entries(outcome.statChanges)) {
        if (amount !== 0) {
          const result = player.modifyStat(stat, amount);
          if (result.change !== 0) {
            changes.push(result);
          }
        }
      }
    }

    // Record decision
    if (choice.decision) {
      player.addDecision(choice.decision);
    }

    return {
      text: outcome.text,
      changes,
      checkResult,
      choiceText: choice.text
    };
  },

  formatStatName(stat) {
    switch (stat) {
      case 'courage': return 'Courage';
      case 'streetSmarts': return 'Street-Smarts';
      case 'stamina': return 'Stamina';
      default: return stat;
    }
  }
};
