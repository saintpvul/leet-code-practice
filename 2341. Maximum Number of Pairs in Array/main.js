/*

You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

*/

// solution

var numberOfPairs = function (nums) {
    let frequency = {};
    let left = 0,
        pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        let lastOccur = nums.lastIndexOf(nums[i]);
        frequency[nums[i]] ? frequency[nums[i]]++ : (frequency[nums[i]] = 1);
        if (!(frequency[nums[i]] % 2)) {
            pairs++;
            frequency[nums[i]] = 0;
        }
        if (frequency[nums[i]] % 2 && i === lastOccur) {
            left++;
        }
    }
    return [pairs, left];
};
