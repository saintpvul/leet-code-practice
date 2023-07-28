/*

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

// solution

// not allowed
// var multiply = function (num1, num2) {
//     return (BigInt(num1) * BigInt(num2)).toString();
// };

var multiply = function (num1, num2) {
    const n = num1.length;
    const m = num2.length;
    const res = new Array(n + m).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const prod = parseInt(num1[i]) * parseInt(num2[j]);
            const sum = prod + res[i + j + 1];

            res[i + j] += Math.floor(sum / 10);
            res[i + j + 1] = sum % 10;
        }
    }

    while (res.length > 1 && res[0] === 0) {
        res.shift();
    }

    return res.join("");
};
