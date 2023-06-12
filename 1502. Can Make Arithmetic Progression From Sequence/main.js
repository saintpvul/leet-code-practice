/*

A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

*/

// solution

var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[0] - arr[1]);
        if (diff !== Math.abs(arr[i] - arr[i + 1])) return false;
    }
    return true;
};
