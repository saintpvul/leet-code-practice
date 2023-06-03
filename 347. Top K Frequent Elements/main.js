/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

*/

// solution

var topKFrequent = function (nums, k) {
    const counter = new Map();

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        counter.set(value, (counter.get(value) || 1) + 1);
    }

    const sortedCounter = [...counter.entries()].sort((a, b) => b[1] - a[1]);

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(sortedCounter[i][0]);
    }

    return result;
};
