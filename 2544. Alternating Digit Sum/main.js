/*

You are given a positive integer n. Each digit of n has a sign according to the following rules:

The most significant digit is assigned a positive sign.
Each other digit has an opposite sign to its adjacent digits.
Return the sum of all digits with their corresponding sign.

*/

// solution

var alternateDigitSum = function (n) {
    let res = 0;
    let isPos = 1;
    while (n) {
        res += (n % 10) * isPos;
        isPos = -isPos;
        n = Math.floor(n / 10);
    }
    return res * -isPos;
};
