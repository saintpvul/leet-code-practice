/*

The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

*/

// solution

var maxProductDifference = function (nums) {
    let x = Math.max(...nums);
    nums.splice(nums.indexOf(x), 1);
    let w = Math.max(...nums);
    let y = Math.min(...nums);
    nums.splice(nums.indexOf(y), 1);
    let z = Math.min(...nums);
    return x * w - y * z;
};
