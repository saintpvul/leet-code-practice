/*

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

*/

// solution

var relativeSortArray = function (arr1, arr2) {
    let res = Array.from({ length: arr1.length }, () => 0);
    let numbers = {};

    for (let num of arr1) {
        numbers[num] ? numbers[num]++ : (numbers[num] = 1);
    }

    let pointer = 0;
    for (let val of arr2) {
        while (numbers[val] > 0) {
            res[pointer] = val;
            pointer++;
            numbers[val]--;
        }
    }

    for (let i = 0; i <= 1000; i++) {
        while (numbers[i] > 0) {
            res[pointer] = i;
            pointer++;
            numbers[i]--;
        }
    }

    return res;
};
