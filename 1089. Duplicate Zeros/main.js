/*

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

*/

// solution

var duplicateZeros = function (arr) {
    let i = 0;

    while (i < arr.length) {
        if (arr[i] === 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j - 1];
            }
            i += 2;
        } else {
            i++;
        }
    }
};
