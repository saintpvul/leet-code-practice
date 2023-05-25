/*

Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

*/

// solution

// using binary search (slowest one)

var checkIfExist = function (arr) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        const target1 = arr[i] * 2;
        const target2 = arr[i] / 2;

        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (mid !== i && (arr[mid] === target1 || arr[mid] === target2)) {
                return true;
            } else if (arr[mid] < target1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};

// var checkIfExist = function (arr) {
//     const numsSet = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         if (numsSet.has(arr[i] / 2) || numsSet.has(arr[i] * 2)) {
//             return true;
//         }
//         numsSet.add(arr[i]);
//     }

//     return false;
// };
