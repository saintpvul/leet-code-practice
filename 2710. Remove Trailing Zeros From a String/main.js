/*

Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

*/

// solution

// var removeTrailingZeros = function (num) {
//     return num.replace(/0+$/, "");
// };

var removeTrailingZeros = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] != "0") {
            return num.slice(0, i + 1);
        }
    }
};
