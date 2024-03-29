/*

You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

*/

// solution

var findTheDifference = function (s, t) {
    const chars = new Map();
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        chars.set(char, (chars.get(char) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        chars.set(char, chars.get(char) - 1);
        if (chars.get(char) === 0) {
            chars.delete(char);
        }
    }
    return chars.keys().next().value;
};
