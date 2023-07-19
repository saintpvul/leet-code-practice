/*

Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.

*/

// solution

var minNumber = function (nums1, nums2) {
    let min1 = Infinity;
    let min2 = Infinity;

    let equals = new Set();
    for (let i = 0; i < nums1.length; i++) {
        min1 = Math.min(nums1[i], min1);
        if (nums2.includes(nums1[i])) {
            equals.add(nums1[i]);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        min2 = Math.min(nums2[i], min2);
    }
    let min3 = equals.size > 0 ? Math.min(...Array.from(equals)) : null;

    if (min3 !== null) return min3;
    else {
        if (min1 < min2) {
            return Number(min1 + "" + min2);
        } else {
            return Number(min2 + "" + min1);
        }
    }
};
