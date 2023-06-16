/*

Given a binary array nums, return the maximum number of consecutive 1's in the array.

*/

// solution

var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let currentCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            count = Math.max(count, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return count;
};
