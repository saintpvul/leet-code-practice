/*

You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

*/

// solution

var countPrefixes = function (words, s) {
    let pref = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (words[i][j] !== s[j]) {
                break;
            } else if (j === words[i].length - 1) {
                pref.push(words[i]);
            }
        }
    }
    return pref.length;
};
