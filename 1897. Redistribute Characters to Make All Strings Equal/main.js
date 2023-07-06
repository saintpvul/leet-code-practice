/*

You are given an array of strings words (0-indexed).

In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

Return true if you can make every string in words equal using any number of operations, and false otherwise.

*/

// solution

var makeEqual = function (words) {
    if (words.length === 1) return true;

    const charCount = new Map();
    const wordCount = words.length;

    for (let word of words) {
        for (let char of word) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }

    for (let count of charCount.values()) {
        if (count % wordCount !== 0) {
            return false;
        }
    }

    return true;
};
