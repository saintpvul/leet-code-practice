/*

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

*/

// solution

var largestPerimeter = function (nums) {
    if (nums.length < 3) return 0;

    nums = nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }
    return 0;
};
