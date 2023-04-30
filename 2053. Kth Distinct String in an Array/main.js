/*

A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

*/

// solution

var kthDistinct = function (arr, k) {
    let dist = [];
    for (let item of arr) {
        if (arr.indexOf(item) === arr.lastIndexOf(item)) {
            dist.push(item);
        }
    }
    return dist.length + 1 < k || !dist.length ? "" : dist[k - 1];
};
