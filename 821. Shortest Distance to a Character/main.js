/*

Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

*/

// solution

var shortestToChar = function (s, c) {
    const n = s.length;
    const result = new Array(n);
    let prev = -Infinity;

    for (let i = 0; i < n; i++) {
        if (s[i] === c) {
            prev = i;
        }
        result[i] = i - prev;
    }

    prev = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }
        result[i] = Math.min(result[i], prev - i);
    }

    return result;
};
