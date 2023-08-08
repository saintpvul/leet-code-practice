/*

You are given an array nums consisting of positive integers.

You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

Return the number of distinct integers in the final array.

*/

// solution

var countDistinctIntegers = function (nums) {
    const dist = new Set();
    for (let i = 0; i < nums.length; i++) {
        dist.add(nums[i]);
        dist.add(+String(nums[i]).split("").reverse().join(""));
    }
    return dist.size;
};
