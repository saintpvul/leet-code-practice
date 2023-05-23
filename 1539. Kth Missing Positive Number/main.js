/*

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

*/

// solution

var findKthPositive = function (arr, k) {
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        const pivot = Math.floor(left + (right - left) / 2);
        if (arr[pivot] - pivot - 1 < k) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }

    return left + k;
};
