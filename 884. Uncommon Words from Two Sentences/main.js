/*

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

*/

// solution

var uncommonFromSentences = function (s1, s2) {
    const words = new Map();
    const uncommon = [];

    s1.split(" ").forEach((word) => {
        words.set(word, (words.get(word) || 0) + 1);
    });

    s2.split(" ").forEach((word) => {
        words.set(word, (words.get(word) || 0) + 1);
    });

    for (const [word, count] of words.entries()) {
        if (count === 1) {
            uncommon.push(word);
        }
    }

    return uncommon;
};
