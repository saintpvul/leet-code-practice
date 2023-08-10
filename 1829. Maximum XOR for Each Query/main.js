/*

You are given a sorted array nums of n non-negative integers and an integer maximumBit. You want to perform the following query n times:

Find a non-negative integer k < 2maximumBit such that nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k is maximized. k is the answer to the ith query.
Remove the last element from the current array nums.
Return an array answer, where answer[i] is the answer to the ith query.

*/

// solution

var getMaximumXor = function (nums, maximumBit) {
    const answer = Array.from({ length: nums.length });
    let xorTotal = 0;

    for (const num of nums) {
        xorTotal ^= num;
    }

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[nums.length - i - 1];
        let k = 0;

        for (let j = maximumBit - 1; j >= 0; j--) {
            if (((xorTotal >> j) & 1) == 0) {
                k |= 1 << j;
            }
        }

        answer[i] = k;
        xorTotal ^= currentNum;
    }

    return answer;
};
