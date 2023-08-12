/*

Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b. Two subsets are considered different if the indices of the elements chosen are different.

The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed).

*/

// solution

var countMaxOrSubsets = function (nums) {
    const n = nums.length;
    let max = -Infinity;
    let res = 0;

    for (let i = 0; i < n; i++) {
        max |= nums[i];
    }

    const dfs = (pre, depth) => {
        if (depth === n) {
            if (pre === max) res++;
            return;
        }
        dfs(pre, depth + 1);
        dfs(pre | nums[depth], depth + 1);
    };

    dfs(0, 0);
    return res;
};
