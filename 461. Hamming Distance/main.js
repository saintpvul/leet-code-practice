/*

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

*/

// solution

var hammingDistance = function (x, y) {
    x = x.toString(2);
    y = y.toString(2);
    let n = Math.max(x.length, y.length);
    x = ("0".repeat(n) + x).slice(-n);
    y = ("0".repeat(n) + y).slice(-n);
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (x[i] !== y[i]) {
            count++;
        }
    }
    return count;
};
