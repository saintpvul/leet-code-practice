/*

You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique. 

*/

// solution

var specialArray = function (nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;

    for (let i = 0; i < n; i++) {
        const count = len - i;
        if (nums[i] >= count && (i === 0 || nums[i - 1] < count)) {
            return count;
        }
    }

    return -1;
};
