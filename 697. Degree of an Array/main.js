/*

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

*/

// solution

var findShortestSubArray = function (nums) {
    const frequency = {};
    const indices = {};
    let maxFreq = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!(num in indices)) {
            indices[num] = { start: i, end: i };
        } else {
            indices[num].end = i;
        }

        frequency[num] = (frequency[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, frequency[num]);
    }

    let minLength = Infinity;

    for (const num in frequency) {
        if (frequency[num] === maxFreq) {
            const length = indices[num].end - indices[num].start + 1;
            minLength = Math.min(minLength, length);
        }
    }

    return minLength;
};
