/*

Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

*/

// solution

var numOfPairs = function (nums, target) {
    let res = 0;
    const count = new Map();

    for (const num of nums) {
        const k = num.length;

        if (target.slice(0, k) === num) {
            res += count.get(target.slice(k)) || 0;
        }
        if (target.slice(-k) === num) {
            res += count.get(target.slice(0, -k)) || 0;
        }

        count.set(num, (count.get(num) || 0) + 1);
    }

    return res;
};
