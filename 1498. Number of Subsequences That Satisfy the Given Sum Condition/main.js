/*

You are given an array of integers nums and an integer target.

Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

*/

// solution

var numSubseq = function (nums, target) {
    const kMod = 1_000_000_007;
    const n = nums.length;
    let ans = 0;
    const pows = new Array(n).fill(1);

    for (let i = 1; i < n; ++i) pows[i] = (pows[i - 1] * 2) % kMod;

    nums.sort((a, b) => a - b);

    for (let l = 0, r = n - 1; l <= r; ) {
        if (nums[l] + nums[r] <= target) {
            ans = (ans + pows[r - l]) % kMod;
            ++l;
        } else {
            --r;
        }
    }

    return ans;
};
