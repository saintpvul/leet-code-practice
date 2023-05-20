/*

Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

*/

// solution

var findMaxK = function (nums) {
    let ints = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === Math.abs(nums[i]) && !ints.has(nums[i])) {
            ints.set(nums[i], true);
        }
    }
    let max = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === Math.abs(nums[i])) {
            continue;
        }
        if (ints.has(Math.abs(nums[i])) && Math.abs(nums[i]) > max) {
            max = Math.abs(nums[i]);
        }
    }
    return max;
};
