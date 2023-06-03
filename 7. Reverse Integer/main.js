/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

*/

// solution

var reverse = function (x) {
    let res = 0;
    let num = Math.abs(x);

    while (num > 0) {
        res = res * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
        return 0;
    }

    return x < 0 ? -res : res;
};
