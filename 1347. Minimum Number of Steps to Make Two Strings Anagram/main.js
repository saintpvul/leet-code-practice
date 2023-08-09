/*

You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

*/

// solution

var minSteps = function (s, t) {
    const alph = Array.from({ length: 26 }, () => 0);

    for (let i = 0; i < s.length; i++) {
        alph[s[i].charCodeAt() - 97]++;
        alph[t[i].charCodeAt() - 97]--;
    }

    alph.filter((ch) => ch < 0);

    let step = 0;
    for (let i = 0; i < alph.length; i++) {
        res += Math.abs(alph[i]);
    }
    return step / 2;
};
