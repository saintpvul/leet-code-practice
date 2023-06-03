/*

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

*/

// solution

var addDigits = function (num) {
    let nextNum = num;
    while (nextNum > 9) {
        let strNum = nextNum.toString();
        nextNum = strNum.split("").reduce((s, v) => (s += +v), 0);
    }
    return nextNum;
};
