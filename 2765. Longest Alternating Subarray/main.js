/*

You are given a 0-indexed integer array nums. A subarray s of length m is called alternating if:

m is greater than 1.
s1 = s0 + 1.
The 0-indexed subarray s looks like [s0, s1, s0, s1,...,s(m-1) % 2]. In other words, s1 - s0 = 1, s2 - s1 = -1, s3 - s2 = 1, s4 - s3 = -1, and so on up to s[m - 1] - s[m - 2] = (-1)m.
Return the maximum length of all alternating subarrays present in nums or -1 if no such subarray exists.

A subarray is a contiguous non-empty sequence of elements within an array.

*/

// solution

var alternatingSubarray = function (nums) {
    if (nums.length < 2) {
        return -1;
    }

    let res = 0;
    let m = 1;

    for (let i = 1; i < nums.length; i++) {
        const diff = m % 2 === 0 ? -1 : 1;
        if (nums[i] - nums[i - 1] === diff) {
            m += 1;
        } else if (nums[i] - nums[i - 1] === 1) {
            m = 2;
        } else {
            m = 1;
        }
        res = Math.max(res, m);
    }

    return res > 1 ? res : -1;
};
