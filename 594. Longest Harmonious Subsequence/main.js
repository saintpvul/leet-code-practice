/*

We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

*/

// solution

var findLHS = function (nums) {
    let countMap = new Map();
    let maxLength = 0;

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (let [num, count] of countMap.entries()) {
        if (countMap.has(num + 1)) {
            maxLength = Math.max(maxLength, count + countMap.get(num + 1));
        }
    }

    return maxLength;
};
