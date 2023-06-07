/*

An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

Given an integer n, return true if n is strictly palindromic and false otherwise.

A string is palindromic if it reads the same forward and backward.

*/

// solution

var isStrictlyPalindromic = function (n) {
    if (n < 0 || n < 2 || n > 36) {
        return false;
    }
    let base = n - 2;
    const isPal = (num) => {
        return num === num.split("").reverse().join("");
    };
    while (base >= 2) {
        if (!isPal(n.toString(base))) {
            return false;
        }
        base--;
    }
    return true;
};
