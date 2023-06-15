/*

Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

Note: You are not allowed to use any built-in library method to directly solve this problem.

*/

// solution

var toHex = function (num) {
    if (num < 0) {
        num = Math.pow(2, 32) + num;
    }
    return num.toString(16);
};
