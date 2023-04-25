/*

You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
Return the minimum possible sum of new1 and new2.

*/

// solution

var minimumSum = function (num) {
    const digits = String(num).split("").map(Number);
    let minSum = Infinity;
    const genPairs = (i) => {
        if (i === digits.length) {
            const new1 = Number(digits.slice(0, 2).join(""));
            const new2 = Number(digits.slice(2).join(""));
            const sum = new1 + new2;
            if (sum < minSum) {
                minSum = sum;
            }
            return;
        }
        for (let j = i; j < digits.length; j++) {
            [digits[i], digits[j]] = [digits[j], digits[i]];
            genPairs(i + 1);
            [digits[i], digits[j]] = [digits[j], digits[i]];
        }
    };
    genPairs(0);
    return minSum;
};
