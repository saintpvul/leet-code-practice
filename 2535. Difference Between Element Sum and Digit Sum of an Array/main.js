/*

You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.

 

*/

// solution

var differenceOfSum = function (nums) {
    let sum = 0;
    let digitsSum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        digitsSum += nums[i]
            .toString()
            .split("")
            .reduce((s, v) => (s += +v), 0);
    }
    return Math.abs(sum - digitsSum);
};
