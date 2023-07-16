/*

Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

*/

// solution

var pivotInteger = function (n) {
    const y = (n * n + n) / 2;
    const x = Math.floor(Math.sqrt(y));
    return x * x === y ? x : -1;
};
