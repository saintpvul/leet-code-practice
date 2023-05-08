/*

Given an integer n, return any array containing n unique integers such that they add up to 0.

*/

// solution

var sumZero = function (n) {
    let summed = [];
    if (n % 2) {
        n -= 1;
        summed.push(0);
    }
    let count = n / 2;
    for (let i = 1; i <= count; i++) {
        summed.push(i, -i);
    }
    return summed;
};
