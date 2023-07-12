/*

You are entering a competition, and are given two positive integers initialEnergy and initialExperience denoting your initial energy and initial experience respectively.

You are also given two 0-indexed integer arrays energy and experience, both of length n.

You will face n opponents in order. The energy and experience of the ith opponent is denoted by energy[i] and experience[i] respectively. When you face an opponent, you need to have both strictly greater experience and energy to defeat them and move to the next opponent if available.

Defeating the ith opponent increases your experience by experience[i], but decreases your energy by energy[i].

Before starting the competition, you can train for some number of hours. After each hour of training, you can either choose to increase your initial experience by one, or increase your initial energy by one.

Return the minimum number of training hours required to defeat all n opponents.

*/

// solution

var minNumberOfHours = function (
    initialEnergy,
    initialExperience,
    energy,
    experience
) {
    let currentEnergy = initialEnergy;
    let currentExperience = initialExperience;
    const n = energy.length;
    let totalTrainingHours = 0;
    let delta = 0;

    for (let i = 0; i < n; i++) {
        if (currentEnergy <= energy[i]) {
            delta = energy[i] + 1 - currentEnergy;
            currentEnergy += delta;
            totalTrainingHours += delta;
        }
        currentEnergy -= energy[i];

        if (currentExperience <= experience[i]) {
            delta = experience[i] + 1 - currentExperience;
            currentExperience += delta;
            totalTrainingHours += delta;
        }
        currentExperience += experience[i];
    }

    return totalTrainingHours;
};
