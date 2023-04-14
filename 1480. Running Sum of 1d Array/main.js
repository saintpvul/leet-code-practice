/*

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

*/

// solution

var runningSum = function (nums) {
    let res = [];
    let i = 1;
    while (i <= nums.length) {
        res.push(nums.slice(0, i).reduce((s, v) => (s += v), 0));
        i++;
    }
    return res;
};
