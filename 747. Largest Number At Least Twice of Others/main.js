/*

You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

*/

// solution

var dominantIndex = function (nums) {
    let largest = -1;
    let largestIdx = -1;
    let nextLargest = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
            largestIdx = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < largest && nums[i] > nextLargest) {
            nextLargest = nums[i];
        }
    }
    return largest >= nextLargest * 2 ? largestIdx : -1;
};
