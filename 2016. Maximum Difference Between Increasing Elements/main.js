/*

Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

Return the maximum difference. If no such i and j exists, return -1.

*/

// solution

var maximumDifference = function (nums) {
    let maxDiff = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                let currDiff = nums[j] - nums[i];
                if (currDiff > maxDiff) {
                    maxDiff = currDiff;
                }
            }
        }
    }
    return maxDiff === -1 ? -1 : maxDiff;
};
