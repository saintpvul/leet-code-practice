/*

Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

*/

// solution

var findClosestNumber = function (nums) {
    let closestPos = Infinity;
    let closestNeg = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < closestPos && nums[i] >= 0) {
            closestPos = nums[i];
        } else if (nums[i] > closestNeg && nums[i] < 0) {
            closestNeg = nums[i];
        }
    }
    return closestPos <= Math.abs(closestNeg) ? closestPos : closestNeg;
};
