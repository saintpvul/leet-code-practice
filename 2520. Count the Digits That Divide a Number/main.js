/*

Given an integer num, return the number of digits in num that divide num.

An integer val divides nums if nums % val == 0.

*/

// solution

var countDigits = function (num) {
    const strNum = num.toString();

    let count = 0;
    for (let i = 0; i < strNum.length; i++) {
        if (num % Number(strNum[i]) === 0) {
            count++;
        }
    }
    return count;
};
