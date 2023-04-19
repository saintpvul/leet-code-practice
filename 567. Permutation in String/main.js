/*

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

*/

// solution

var checkInclusion = function (s1, s2) {
    const s1Counts = Array(26).fill(0);
    const s2Counts = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Counts[s1.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s1.length; i++) {
        s2Counts[s2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i <= s2.length - s1.length; i++) {
        if (s1Counts.every((count, index) => count === s2Counts[index])) {
            return true;
        }
        s2Counts[s2.charCodeAt(i) - 97]--;
        s2Counts[s2.charCodeAt(i + s1.length) - 97]++;
    }

    return false;
};
