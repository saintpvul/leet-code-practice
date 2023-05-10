/*

You are given a 0-indexed array nums of length n.

The distinct difference array of nums is an array diff of length n such that diff[i] is equal to the number of distinct elements in the suffix nums[i + 1, ..., n - 1] subtracted from the number of distinct elements in the prefix nums[0, ..., i].

Return the distinct difference array of nums.

Note that nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j inclusive. Particularly, if i > j then nums[i, ..., j] denotes an empty subarray.

*/

// solution

//simple and slow ( O(n^2))

// var distinctDifferenceArray = function (nums) {
//     let diff = [];
//     for (let i = 0; i < nums.length - 0; i++) {
//         let prefix = Array.from(new Set([...nums].slice(0, i + 1))).length;
//         let suffix = Array.from(new Set([...nums].slice(i + 1))).length;
//         diff.push(prefix - suffix);
//     }
//     return diff;
// };

var distinctDifferenceArray = function (nums) {
    let n = nums.length;
    let prefix = Array.from({ length: n });
    let suffix = Array.from({ length: n });
    let uniq = new Set();

    for (let i = 0; i < n; i++) {
        uniq.add(nums[i]);
        prefix[i] = uniq.size;
    }

    uniq = new Set();

    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = uniq.size;
        uniq.add(nums[i]);
    }

    return prefix.map((pre, i) => pre - suffix[i]);
};
