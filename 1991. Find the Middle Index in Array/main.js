/*

Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

 

*/

// solution

// var findMiddleIndex = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let mid = nums[i];
//         let left = nums.slice(0, i).reduce((s, v) => s + v, 0);
//         let right = nums.slice(i + 1).reduce((s, v) => s + v, 0);
//         if (left === right) {
//             return i;
//         }
//     }
//     return -1;
// };

// faster way
var findMiddleIndex = function (nums) {
    const totalSum = nums.reduce((s, v) => s + v, 0);

    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};
