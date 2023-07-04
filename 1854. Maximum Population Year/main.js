/*

You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.

*/

// solution

var maximumPopulation = function (logs) {
    const populationCount = new Array(101).fill(0);
    const birthOffset = 1950;
    for (let i = 0; i < logs.length; i++) {
        const birthYear = logs[i][0] - birthOffset;
        const deathYear = logs[i][1] - birthOffset;
        populationCount[birthYear] += 1;
        populationCount[deathYear] -= 1;
    }
    let currentPopulation = 0;
    let maxPopulation = 0;
    let maxYear = 0;
    for (let i = 0; i < populationCount.length; i++) {
        currentPopulation += populationCount[i];
        if (currentPopulation > maxPopulation) {
            maxPopulation = currentPopulation;
            maxYear = i + birthOffset;
        }
    }
    return maxYear;
};
