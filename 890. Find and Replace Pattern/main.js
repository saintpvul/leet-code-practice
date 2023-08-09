/*

Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

*/

// solution

var findAndReplacePattern = function (words, pattern) {
    const res = [];
    for (const w of words) {
        const p = new Array(26).fill(0);
        const s = new Array(26).fill(0);
        let same = true;
        for (let i = 0; i < w.length; i++) {
            if (
                s[w.charCodeAt(i) - 97] !==
                p[pattern.charCodeAt(i) - "a".charCodeAt(0)]
            ) {
                same = false;
                break;
            } else {
                s[w.charCodeAt(i) - 97] = p[
                    pattern.charCodeAt(i) - "a".charCodeAt(0)
                ] = i + 1;
            }
        }
        if (same) res.push(w);
    }
    return res;
};
