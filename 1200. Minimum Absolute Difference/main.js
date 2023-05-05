/*

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

*/

// solution

var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let diff = arr[arr.length - 1];
    for (let i = 0, j = i + 1; i < arr.length - 1; i++, j++) {
        if (Math.abs(arr[i] - arr[j]) <= diff) diff = Math.abs(arr[i] - arr[j]);
    }
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) === diff) {
            res.push([arr[i], arr[i + 1]]);
        }
    }
    return res;
};
