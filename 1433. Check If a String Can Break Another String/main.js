/*

Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.

A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

*/

// solution

var checkIfCanBreak = function (s1, s2) {
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        freq1[s1.charCodeAt(i) - 97]++;
        freq2[s2.charCodeAt(i) - 97]++;
    }

    let count1 = 0;
    let count2 = 0;
    let canBr1 = true;
    let canBr2 = true;

    for (let i = 0; i < 26; i++) {
        count1 += freq1[i];
        count2 += freq2[i];

        if (count1 < count2) {
            canBr1 = false;
        }

        if (count1 > count2) {
            canBr2 = false;
        }
    }
    return canBr1 || canBr2;
};
