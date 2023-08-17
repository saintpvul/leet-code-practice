/*

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

*/

// solution

var findDuplicates = function (nums) {
    const duplicates = new Set();
    const numsSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (numsSet.has(nums[i])) {
            duplicates.add(nums[i]);
        } else {
            numsSet.add(nums[i]);
        }
    }
    return Array.from(duplicates);
};
