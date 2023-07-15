/*

Given two positive integers a and b, return the number of common factors of a and b.

An integer x is a common factor of a and b if x divides both a and b.

*/

// solution

var commonFactors = function (a, b) {
    let count = 0;

    for (let i = Math.max(a, b); i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }
    return count;
};
