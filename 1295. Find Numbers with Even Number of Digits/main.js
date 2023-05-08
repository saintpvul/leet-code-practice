/*

Given an array nums of integers, return how many of them contain an even number of digits.

*/

// solution

var findNumbers = function (nums) {
    return nums.filter((e) => !(e.toString().length % 2)).length;
};
