/*

Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

*/

// solution

var secondHighest = function (s) {
    let digits = Array.from(
        new Set(s.slice().replace(/\D/gi, "").split(""))
    ).sort((a, b) => b - a);
    return digits[1] ? digits[1] : -1;
};
