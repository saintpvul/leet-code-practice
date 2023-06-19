/*

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

*/

// solution

var hasAlternatingBits = function (n) {
    let bit = n.toString(2);
    for (let i = 0; i < bit.length - 1; i++) {
        if (bit[i] === bit[i + 1]) {
            return false;
        }
    }
    return true;
};
