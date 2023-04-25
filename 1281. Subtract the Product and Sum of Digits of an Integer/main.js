/*

Given an integer number n, return the difference between the product of its digits and the sum of its digits.

*/

// solution

// var subtractProductAndSum = function (n) {
//     n = n.toString().split('').map(Number)
//     let prod = n.reduce((prod, num) => (prod *= num), 1);
//     let sum = n.reduce((sum, num) => (sum += num), 0);
//     return prod - sum;
// };

var subtractProductAndSum = function (n) {
    let prod = 1,
        sum = 0;
    n = n.toString();
    for (let i = 0; i < n.length; i++) {
        prod *= +n[i];
        sum += +n[i];
    }
    return prod - sum;
};
