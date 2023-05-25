/*

Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

*/

// solution

var checkIfExist = function (arr) {
    const numsSet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (numsSet.has(arr[i] / 2) || numsSet.has(arr[i] * 2)) {
            return true;
        }
        numsSet.add(arr[i]);
    }
    return false;
};
