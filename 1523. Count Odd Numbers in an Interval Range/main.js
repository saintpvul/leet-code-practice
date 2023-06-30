/*

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

*/

// solution

// var countOdds = function (low, high) {
//     let oddCounter = 0;
//     for (let i = low; i <= high; i++) {
//         if (i % 2) {
//             oddCounter++;
//         }
//     }
//     return oddCounter;
// };

var countOdds = function (low, high) {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};
