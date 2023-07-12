/*

Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1.

*/

// solution

var mostFrequentEven = function (nums) {
    let frequency = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num % 2 === 0) {
            frequency[num] = frequency[num] + 1 || 1;
        }
    }
    let mostFrequentOne = -1;
    let frequencyCount = 0;

    for (let [num, count] of Object.entries(frequency)) {
        if (frequencyCount === count) {
            mostFrequentOne = Math.min(num, mostFrequentOne);
        } else if (count > frequencyCount) {
            frequencyCount = count;
            mostFrequentOne = num;
        }
    }

    return parseInt(mostFrequentOne);
};
