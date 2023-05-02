/*

Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

*/

// solution

var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        const lOdd = Math.floor((i + 1) / 2);
        const lEven = Math.floor(i / 2) + 1;
        const rOdd = Math.floor((l - i) / 2);
        const rEven = Math.floor((l - i - 1) / 2) + 1;
        sum += arr[i] * (lOdd * rOdd + lEven * rEven);
    }
    return sum;
};
