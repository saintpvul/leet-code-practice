/*

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

*/

// solution

var findDisappearedNumbers = function (nums) {
    const appeared = new Set(nums);
    const disappeared = [];

    for (let i = 1; i < nums.length + 1; i++) {
        if (!appeared.has(i)) {
            disappeared.push(i);
        }
    }
    return disappeared;
};
