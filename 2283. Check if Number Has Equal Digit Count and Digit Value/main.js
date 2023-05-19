/*

You are given a 0-indexed string num of length n consisting of digits.

Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

*/

// solution

var digitCount = function (num) {
    for (let i = 0; i < num.length; i++) {
        const count = Number(num[i]);
        let digitCount = 0;

        for (let j = 0; j < num.length; j++) {
            if (Number(num[j]) === i) {
                digitCount++;
            }
        }

        if (digitCount !== count) {
            return false;
        }
    }

    return true;
};
