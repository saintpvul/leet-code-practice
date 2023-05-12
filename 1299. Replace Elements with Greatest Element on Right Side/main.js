/*

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

*/

// solution

var replaceElements = function (arr) {
    let greatest = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i];
        arr[i] = greatest;
        greatest = Math.max(greatest, current);
    }
    return arr;
};
