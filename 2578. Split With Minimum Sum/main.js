/*

Given a positive integer num, split it into two non-negative integers num1 and num2 such that:

The concatenation of num1 and num2 is a permutation of num.
In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
num1 and num2 can contain leading zeros.
Return the minimum possible sum of num1 and num2.

Notes:

It is guaranteed that num does not contain any leading zeros.
The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num.

*/

// solution

var splitNum = function (num) {
    const str = String(num);
    const sorted = str.split("").sort();
    let num1 = "";
    let num2 = "";

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === "0" && num1 === "") {
            num1 += sorted[i];
        } else {
            if (num1.length <= num2.length) {
                num1 += sorted[i];
            } else {
                num2 += sorted[i];
            }
        }
    }

    return Number(num1) + Number(num2);
};
