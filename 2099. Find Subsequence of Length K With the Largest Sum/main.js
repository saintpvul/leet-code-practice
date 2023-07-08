/*

You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

Return any such subsequence as an integer array of length k.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

*/

// solution

var maxSubsequence = function (nums, k) {
    const sortedNums = nums.map((n, i) => [i, n]).sort((a, b) => b[1] - a[1]);
    const subsequence = sortedNums.slice(0, k);
    const res = Array(nums.length).fill(undefined);

    for (let [index, value] of subsequence) {
        res[index] = value;
    }

    return res.filter((i) => i !== undefined);
};
