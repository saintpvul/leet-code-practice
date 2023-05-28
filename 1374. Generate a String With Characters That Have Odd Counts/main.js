/*

Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

*/

// solution

var generateTheString = function (n) {
    return n % 2 ? "a".repeat(n) : "a".repeat(n - 1) + "b";
};
