/*

You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.

*/

// solution

// var canBeEqual = function (target, arr) {
//     let countTarget = {};
//     let countArr = {};

//     for (let i = 0; i < target.length; i++) {
//         countTarget[target[i]]
//             ? countTarget[target[i]]++
//             : (countTarget[target[i]] = 1);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         countArr[arr[i]] ? countArr[arr[i]]++ : (countArr[arr[i]] = 1);
//     }

//     const targetString = JSON.stringify(countTarget);
//     const arrString = JSON.stringify(countArr);

//     return targetString === arrString;
// };

var canBeEqual = function (target, arr) {
    const count = {};

    for (let i = 0; i < target.length; i++) {
        count[target[i]] = (count[target[i]] || 0) + 1;
        count[arr[i]] = (count[arr[i]] || 0) - 1;
    }

    for (const key in count) {
        if (count[key] !== 0) {
            return false;
        }
    }

    return true;
};
