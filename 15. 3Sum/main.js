/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

// solution

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// passes only basic tests

// var threeSum = function (nums) {
//     if (nums.reduce((s, v) => (s += v), 0) === 0) return [nums];
//     let triplets = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     triplets.push(
//                         [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
//                     );
//                     break;
//                 }
//             }
//         }
//     }
//     let uniq1 = [],
//         uniq2 = [];

//     let res = [];
//     for (let i = 0; i < triplets.length - 1; i++) {
//         uniq1 = triplets[i].slice();
//         uniq2 = triplets[i + 1].slice();
//         for (let j = 0; j < triplets[i].length; j++) {
//             if (uniq1[j] === uniq2[j]) {
//                 continue;
//             } else {
//                 res.push(uniq2);
//                 break;
//             }
//         }
//     }
//     return res;
// };

// modified solution

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1,
            k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res;
};
