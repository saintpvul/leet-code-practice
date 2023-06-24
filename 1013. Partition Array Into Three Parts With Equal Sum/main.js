/*

Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

*/

// solution

var canThreePartsEqualSum = function (arr) {
    let sum = arr.reduce((s, v) => s + v, 0);
    if (sum % 3 !== 0) {
        return false;
    }

    const targetSum = sum / 3;
    let currentSum = 0;
    let partitionsFound = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum === targetSum) {
            partitionsFound++;
            currentSum = 0;
        }

        if (partitionsFound === 2 && i !== arr.length - 1) {
            return true;
        }
    }

    return false;
};
