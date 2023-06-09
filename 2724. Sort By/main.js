/*

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

*/

// solution

var sortBy = function (arr, fn) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        pairs.push([elem, fn(elem)]);
    }
    pairs = pairs.sort((a, b) => a[1] - b[1]);
    let sorted = [];
    for (let i = 0; i < pairs.length; i++) {
        sorted.push(pairs[i][0]);
    }
    return sorted;
};
