/*

Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

*/

// solution

var twoOutOfThree = function (nums1, nums2, nums3) {
    let numbers = Array.from(new Set([...arguments].flat()));
    let occurs = [];
    for (const n of numbers) {
        if (
            (nums1.includes(n) && nums2.includes(n)) ||
            (nums1.includes(n) && nums3.includes(n)) ||
            (nums2.includes(n) && nums3.includes(n))
        ) {
            occurs.push(n);
        }
    }
    return occurs;
};
