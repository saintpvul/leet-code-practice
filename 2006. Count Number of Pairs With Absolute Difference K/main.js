/*

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.

*/

// solution

var countKDifference = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i < j && Math.abs(nums[i] - nums[j]) === k) {
                count++;
            }
        }
    }
    return count;
};
