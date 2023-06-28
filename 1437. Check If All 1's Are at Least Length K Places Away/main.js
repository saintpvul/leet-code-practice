/*

Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

*/

// solution

var kLengthApart = function (nums, k) {
    let count = k;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (count < k) {
                return false;
            }
            count = 0;
        } else {
            count++;
        }
    }

    return true;
};
