/*

Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.

*/

// solution

var leftRigthDifference = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(
            Math.abs(
                nums.slice(0, i + 1).reduce((s, v) => (s += v), 0) -
                    nums.slice(i).reduce((s, v) => (s += v), 0)
            )
        );
    }
    return res;
};
