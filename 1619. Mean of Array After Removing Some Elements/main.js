/*

Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.

*/

// solution

var trimMean = function (arr) {
    arr = arr.sort((a, b) => a - b);
    const percent = Math.floor(arr.length * 0.05);
    const remaining = arr.slice(percent, arr.length - percent);
    const sum = remaining.reduce((acc, num) => acc + num, 0);
    const mean = sum / remaining.length;
    return mean.toFixed(5);
};
