/*

Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

*/

// solution

var sumOfMultiples = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (!(i % 3) || !(i % 5) || !(i % 7)) sum += i;
    }
    return sum;
};
