/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

*/

// solution

var rotate = function (nums, k) {
    k = k % nums.length;
    nums.unshift(...nums.splice(-k));
};
