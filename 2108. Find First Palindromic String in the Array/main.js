/*

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

*/

// solution

var firstPalindrome = function (words) {
    const isPal = (word) => word && word === word.split("").reverse().join("");
    for (let word of words) {
        if (isPal(word)) {
            return word;
        }
    }
    return "";
};
