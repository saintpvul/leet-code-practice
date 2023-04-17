/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

// solution

var moveZeroes = function (nums) {
    let i = 0,
        j = 0;

    while (i < nums.length) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
        i++;
    }
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
};
