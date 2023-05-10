/*

You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.

*/

// solution

var divideArray = function (nums) {
    let keeper = {};
    for (let i = 0; i < nums.length; i++) {
        keeper[nums[i]] ? keeper[nums[i]]++ : (keeper[nums[i]] = 1);
        if (keeper[nums[i]] % 2 && nums.lastIndexOf(nums[i]) === i) {
            return false;
        }
    }
    return true;
};
