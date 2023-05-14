/*

You are given an integer array nums of length n, and an integer array queries of length m.

Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

*/

// solution

var answerQueries = function (nums, queries) {
    const sortedNums = nums.sort((a, b) => a - b);
    const prefixSums = [0];

    for (let i = 0; i < sortedNums.length; i++) {
        prefixSums[i + 1] = prefixSums[i] + sortedNums[i];
    }

    const answer = [];

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const index = binarySearch(prefixSums, query);
        answer.push(index);
    }

    return answer;
};

const binarySearch = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};
