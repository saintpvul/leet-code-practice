/*

You are given an integer array nums and an integer k. You may partition nums into one or more subsequences such that each element in nums appears in exactly one of the subsequences.

Return the minimum number of subsequences needed such that the difference between the maximum and minimum values in each subsequence is at most k.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

*/

// solution

var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    let res = 1;
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (min + k < nums[i]) {
            res++;
            min = nums[i];
        }
    }

    return res;
};
