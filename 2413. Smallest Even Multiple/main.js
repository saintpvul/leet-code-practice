/*

Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

*/

// solution

var smallestEvenMultiple = function (n) {
    if (!(n % 2)) return n;
    return n * 2;
};
