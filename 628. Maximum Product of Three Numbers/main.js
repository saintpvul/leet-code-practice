/*

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

*/

// solution

var maximumProduct = function (nums) {
    nums = nums.sort((a, b) => a - b);
    const n = nums.length;
    const prod1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const prod2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(prod1, prod2);
};
