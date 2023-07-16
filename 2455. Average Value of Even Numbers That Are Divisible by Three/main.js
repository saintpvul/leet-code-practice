/*

Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

*/

// solution

var averageValue = function (nums) {
    let evensSum = 0;
    let evensCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
            evensSum += nums[i];
            evensCount++;
        }
    }
    return evensSum > 0 ? Math.floor(evensSum / evensCount) : 0;
};
