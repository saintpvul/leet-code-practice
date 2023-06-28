/*

You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

*/

// solution

var maximum69Number = function (num) {
    let maxNum = num;
    let digits = num.toString();
    let currentNum = "";
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === "6") {
            currentNum = digits.slice(0, i) + "9" + digits.slice(i + 1);
        } else {
            currentNum = digits.slice(0, i) + "6" + digits.slice(i + 1);
        }
        maxNum = Math.max(maxNum, +currentNum);
    }
    return maxNum;
};
