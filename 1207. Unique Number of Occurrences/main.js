/*

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

*/

// solution

var uniqueOccurrences = function (arr) {
    let occurence = {};
    for (let i = 0; i < arr.length; i++) {
        occurence[arr[i]] ? occurence[arr[i]]++ : (occurence[arr[i]] = 1);
    }
    let allOccurences = Object.values(occurence),
        uniqOccurences = new Set(allOccurences);
    return allOccurences.length === uniqOccurences.size;
};
