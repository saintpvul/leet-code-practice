/*

You are given a 1-indexed integer array nums of length n.

An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

Return the sum of the squares of all special elements of nums.

*/

// solution

// var sumOfSquares = function (nums) {
//     let elements = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums.length % (i + 1) === 0) {
//             elements.push(nums[i]);
//         }
//     }

//     return elements.reduce((s, e) => s + e ** 2, 0);
// };

// var sumOfSquares = function (nums) {
//     return nums.reduce(
//         (s, e, i) => s + (nums.length % (i + 1) === 0 ? e ** 2 : 0),
//         0
//     );
// };

var sumOfSquares = function (nums) {
    let n = nums.length;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (n % (i + 1) === 0) {
            sum += nums[i] ** 2;
        }
    }
    return sum;
};
