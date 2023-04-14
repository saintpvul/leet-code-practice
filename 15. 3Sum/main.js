/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

// solution

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.reduce((s, v) => (s += v), 0) === 0) return [nums];
    let triplets = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    triplets.push(
                        [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
                    );
                    break;
                }
            }
        }
    }
    let uniq1 = [],
        uniq2 = [];

    let res = [];
    for (let i = 0; i < triplets.length - 1; i++) {
        uniq1 = triplets[i].slice();
        uniq2 = triplets[i + 1].slice();
        for (let j = 0; j < triplets[i].length; j++) {
            if (uniq1[j] === uniq2[j]) {
                continue;
            } else {
                res.push(uniq2);
                break;
            }
        }
    }
    return res;
};
