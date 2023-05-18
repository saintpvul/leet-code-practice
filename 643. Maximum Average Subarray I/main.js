/*

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

*/

// solution

var findMaxAverage = function (nums, k) {
    let sum = nums.slice(0, k).reduce((s, v) => (s += v), 0);
    let maxSum = sum;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        // maxSum = Math.max(maxSum, sum);
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return (maxSum / k).toFixed(5);
};
