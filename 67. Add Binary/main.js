/*

Given two binary strings a and b, return their sum as a binary string.

*/

// solution

var addBinary = function (a, b) {
    let carry = 0;
    let res = "";
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry != 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(a[i--], 10);
        }
        if (j >= 0) {
            sum += parseInt(b[j--], 10);
        }
        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }
    return res;
};
