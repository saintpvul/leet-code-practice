/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

// solution

var singleNumber = function (nums) {
    let single = 0;
    for (let i = 0; i < nums.length; i++) {
        single ^= nums[i];
    }
    return single;
};
