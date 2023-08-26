/*

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

*/

// solution

var frequencySort = function (s) {
    const frequency = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (frequency.has(char)) {
            frequency.set(char, frequency.get(char) + 1);
        } else {
            frequency.set(char, 1);
        }
    }
    const sorted = [...frequency.entries()].sort((a, b) => b[1] - a[1]);
    let res = "";
    for (const [key, val] of sorted) {
        res += key.repeat(val);
    }
    return res;
};
