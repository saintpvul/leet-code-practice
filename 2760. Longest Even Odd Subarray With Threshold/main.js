/*

You are given a 0-indexed integer array nums and an integer threshold.

Find the length of the longest subarray of nums starting at index l and ending at index r (0 <= l <= r < nums.length) that satisfies the following conditions:

nums[l] % 2 == 0
For all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
For all indices i in the range [l, r], nums[i] <= threshold
Return an integer denoting the length of the longest such subarray.

Note: A subarray is a contiguous non-empty sequence of elements within an array.

*/

// solution

var longestAlternatingSubarray = function (nums, threshold) {
    let res = 0;
    let dp = 0;

    const evOrOd = (a, b) => {
        return a % 2 != b % 2;
    };

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > threshold) {
            dp = 0;
        } else if (i > 0 && dp > 0 && evOrOd(nums[i - 1], nums[i])) {
            dp += 1;
        } else {
            dp = nums[i] % 2 ? 0 : 1;
        }
        res = Math.max(res, dp);
    }

    return res;
};
