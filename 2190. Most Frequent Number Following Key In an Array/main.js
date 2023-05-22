/*

You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.

For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:

0 <= i <= nums.length - 2,
nums[i] == key and,
nums[i + 1] == target.
Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

 

*/

// solution

// two innerloops is too slow

// var mostFrequent = function (nums, key) {
//     const freq = new Map();
//     const targets = new Set(nums);

//     for (const target of targets) {
//         for (let i = 0; i < nums.length - 1; i++) {
//             if (nums[i] === key && nums[i + 1] === target) {
//                 freq.set(target, (freq.get(target) || 0) + 1);
//             }
//         }
//     }
//     let maxCount = 0;
//     let outputTarget = 0;
//     for (const [target, counter] of freq.entries()) {
//         if (counter > maxCount) {
//             maxCount = counter;
//             outputTarget = target;
//         }
//     }

//     return outputTarget;
// };

//fastes way

var mostFrequent = function (nums, key) {
    const freq = new Map();
    let maxCount = 0;
    let maxTarget = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            const target = nums[i + 1];
            const count = (freq.get(target) || 0) + 1;
            freq.set(target, count);

            if (count > maxCount) {
                maxCount = count;
                maxTarget = target;
            }
        }
    }

    return maxTarget;
};
