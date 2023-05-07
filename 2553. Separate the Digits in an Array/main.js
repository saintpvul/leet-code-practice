/*

Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

To separate the digits of an integer is to get all the digits it has in the same order.

For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].

*/

// solution

// var separateDigits = function (nums) {
//     nums = nums.join("").split("").map(Number);
//     return nums;
// };

var separateDigits = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let digits = [];
        while (nums[i] >= 10) {
            digits.push(nums[i] % 10);
            nums[i] = Math.floor(nums[i] / 10);
        }
        digits.push(nums[i]);
        res.push(digits.reverse());
    }
    return res.flat();
};
// a little faster
