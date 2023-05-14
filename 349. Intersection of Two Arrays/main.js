/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

*/

// solution

var intersection = function (nums1, nums2) {
    let res = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            res.add(nums1[i]);
        }
    }
    return Array.from(res);
};
