/*

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

*/

// solution

var addStrings = function (num1, num2) {
    let res = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const int1 = i >= 0 ? +num1[i] : 0;
        const int2 = j >= 0 ? +num2[j] : 0;
        const sum = int1 + int2 + carry;

        res = (sum % 10) + res;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    return res;
};
