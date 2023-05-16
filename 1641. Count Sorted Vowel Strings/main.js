/*

Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

*/

// solution

var countVowelStrings = function (n) {
    let result = 1;
    let vowels = 5;

    for (let i = 1; i <= n; i++) {
        result *= vowels + i - 1;
        result /= i;
    }

    return result;
};
