/*

You are given two strings s and t. In one step, you can append any character to either s or t.

Return the minimum number of steps to make s and t anagrams of each other.

An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

*/

// solution

var minSteps = function (s, t) {
    const freqS = {};
    const freqT = {};

    for (const char of s) {
        freqS[char] = (freqS[char] || 0) + 1;
    }

    for (const char of t) {
        freqT[char] = (freqT[char] || 0) + 1;
    }

    let steps = 0;
    for (const char in freqS) {
        steps += Math.abs(freqS[char] - (freqT[char] || 0));
    }

    for (const char in freqT) {
        if (!freqS[char]) {
            steps += freqT[char];
        }
    }

    return steps;
};
