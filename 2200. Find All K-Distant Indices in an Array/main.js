/*

You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

Return a list of all k-distant indices sorted in increasing order.

*/

// solution

var findKDistantIndices = function (nums, key, k) {
    const n = nums.length;
    const res = [];

    let j = 0;
    for (let i = 0; i < n; i++) {
        while (j < n && (nums[j] !== key || j < i - k)) {
            j++;
        }
        if (j === n) {
            break;
        }
        if (Math.abs(i - j) <= k) {
            res.push(i);
        }
    }

    return res;
};
