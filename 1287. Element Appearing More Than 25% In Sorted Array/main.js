/*

Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

*/

// solution

// var findSpecialInteger = function (arr) {
//     if (arr.length === 1) return arr[0];
//     let percentage = Math.floor(arr.length * 0.25);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + percentage]) {
//             return arr[i];
//         }
//     }
// };

var findSpecialInteger = function (arr) {
    if (arr.length === 1) return arr[0];
    let percentage = Math.floor(arr.length * 0.25);
    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (counter[elem]) {
            if (counter[elem] >= percentage) {
                return elem;
            }
            counter[elem]++;
        } else {
            counter[elem] = 1;
        }
    }
};
