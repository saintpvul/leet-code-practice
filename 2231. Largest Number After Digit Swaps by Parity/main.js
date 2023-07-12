/*

You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

Return the largest possible value of num after any number of swaps.

*/

// solution

var largestInteger = function (num) {
    num = num.toString();
    let digits = num.split("").map(Number);
    let evens = digits.filter((digit) => digit % 2 === 0).sort((a, b) => b - a);
    let odds = digits.filter((digit) => digit % 2 === 1).sort((a, b) => b - a);
    let res = [];

    let i = 0;
    let j = 0;

    for (let k = 0; k < digits.length; k++) {
        if (digits[k] % 2 === 0) {
            if (j < evens.length) {
                res.push(evens[j]);
                j++;
            } else {
                res.push(odds[i]);
                i++;
            }
        } else {
            if (i < odds.length) {
                res.push(odds[i]);
                i++;
            } else {
                res.push(evens[j]);
                j++;
            }
        }
    }

    return parseInt(res.join(""));
};
