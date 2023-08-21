/*

Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.
 
*/

// solution

var maxSumAfterPartitioning = function (arr, k) {
    const n = arr.length;
    const dp = Array.from({ length: n }, () => 0);

    for (let i = 0; i < n; i++) {
        let max = 0;
        for (let j = 1; j <= k && i - j + 1 >= 0; j++) {
            max = Math.max(max, arr[i - j + 1]);
            dp[i] = Math.max(dp[i], (i >= j ? dp[i - j] : 0) + max * j);
        }
    }
    return dp[n - 1];
};
