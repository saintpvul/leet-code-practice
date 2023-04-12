/*

Write a function that takes an input array of integers arr and a filtering function fn and returns a new array with a fewer or equal number of elements.

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

Please solve it without the built-in Array.filter method.

*/

// solution

var filter = function (arr, fn) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
};
