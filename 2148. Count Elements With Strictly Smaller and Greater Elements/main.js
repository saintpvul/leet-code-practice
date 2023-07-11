/*

Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

*/

// solution

var countElements = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let smaller = false;
        let greater = false;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                smaller = true;
            } else if (nums[j] > nums[i]) {
                greater = true;
            }
        }

        if (smaller && greater) {
            count++;
        }
    }

    return count;
};
