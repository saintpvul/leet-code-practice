/*

Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

*/

// solution

var findLucky = function (arr) {
    let freq = new Map();

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let largest = -1;

    for (const [key, value] of freq.entries()) {
        if (key === value) {
            largest = Math.max(largest, key);
        }
    }

    return largest;
};
