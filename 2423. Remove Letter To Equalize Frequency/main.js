/*

You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:

The frequency of a letter x is the number of times it occurs in the string.
You must remove exactly one letter and cannot chose to do nothing.

*/

// solution

var equalFrequency = function (word) {
    const count = new Map();

    for (const char of word) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (const char of word) {
        count.set(char, count.get(char) - 1);
        if (equalCount(count)) {
            return true;
        }
        count.set(char, count.get(char) + 1);
    }

    return false;
};

const equalCount = (count) => {
    let freq = -1;

    for (const c of count.values()) {
        if (c === 0 || c === freq) {
            continue;
        }
        if (freq === -1) {
            freq = c;
        } else {
            return false;
        }
    }

    return true;
};
