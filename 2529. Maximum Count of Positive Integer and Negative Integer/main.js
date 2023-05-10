/*

Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

*/

// solution

// var maximumCount = function (nums) {
//     let pos = [...nums].filter((e) => e > 0).length;
//     let neg = [...nums].filter((e) => e < 0).length;

//     return Math.max(pos, neg);
// };

var maximumCount = function (nums) {
    let pos = 0,
        neg = 0;
    for (let num of nums) {
        num > 0 ? pos++ : num < 0 ? neg++ : 0;
    }
    return pos > neg ? pos : neg;
};
