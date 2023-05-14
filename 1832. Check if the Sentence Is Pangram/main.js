/*

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

*/

// solution

var checkIfPangram = function (sentence) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alph.length; i++) {
        if (!sentence.includes(alph[i])) return false;
    }
    return true;
};
