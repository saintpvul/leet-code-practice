/*

Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

*/

// solution

var countPairs = function (nums, k) {
    let pairs = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && !((i * j) % k)) {
                pairs++;
            }
        }
    }
    return pairs;
};
