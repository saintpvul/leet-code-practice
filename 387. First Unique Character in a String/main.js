/*

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

*/

// solution

/*

//faster way

var firstUniqChar = function(s) {
    const chars = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        chars[char] = (chars[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (chars[char] === 1) {
            return i;
        }
    }

    return -1;
};

*/

//using hashmap

var firstUniqChar = function (s) {
    const chars = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        chars.has(char) ? chars.get(char).push(i) : chars.set(char, [i]);
    }

    for (const [letter, idx] of chars.entries()) {
        if (idx.length === 1) return idx[0];
    }
    return -1;
};
