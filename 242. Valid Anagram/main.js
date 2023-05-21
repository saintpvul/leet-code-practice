/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

// solution

var isAnagram = function (s, t) {
    const letters = new Map();

    for (let i = 0; i < s.length; i++) {
        letters.set(s[i], (letters.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        letters.set(t[i], (letters.get(t[i]) || 0) - 1);
    }

    return Array.from(letters.entries()).every((e) => e[1] === 0);
};
