/*

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

*/

// solution

var selfDividingNumbers = function (left, right) {
    let arr = new Array(right - left + 1)
        .fill()
        .map((_, i) => left + i)
        .filter((n) => isSelfDividing(n));

    function isSelfDividing(n) {
        let digits = n.toString().split("");

        for (let digit of digits) {
            if (n % digit !== 0) {
                return false;
            }
        }
        return true;
    }
    return arr;
};
