/*

Given an integer array nums and an integer k, modify the array in the following way:

choose an index i and replace nums[i] with -nums[i].
You should apply this process exactly k times. You may choose the same index i multiple times.

Return the largest possible sum of the array after modifying it in this way.

*/

// solution

var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0;

    while (k > 0 && i < nums.length && nums[i] < 0) {
        nums[i] = -nums[i];
        k--;
        i++;
    }

    if (k % 2 !== 0) {
        nums.sort((a, b) => a - b);
        nums[0] = -nums[0];
    }

    let sum = nums.reduce((acc, num) => acc + num, 0);
    return sum;
};
