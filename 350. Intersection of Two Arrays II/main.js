/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

*/

// solution

var intersect = function (nums1, nums2) {
    let shortest = nums1.length <= nums2.length ? nums1 : nums2;
    let largest = shortest.length === nums1.length ? nums2 : nums1;
    let counter = new Map();
    let res = [];
    for (let digit of shortest) {
        !counter[digit] ? (counter[digit] = 1) : counter[digit]++;
    }

    for (let digit of largest) {
        if (counter[digit] && counter[digit] > 0) {
            res.push(digit);
            counter[digit]--;
        }
    }
    return res;
};
