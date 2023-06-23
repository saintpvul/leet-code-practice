/*

The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

*/

// solution

var addToArrayForm = function (num, k) {
    num.reverse();
    let carry = 0;
    let i = 0;

    while (k > 0 || carry) {
        if (i < num.length) {
            carry += num[i];
        } else {
            num.push(0);
            carry += 0;
        }

        carry += k % 10;
        num[i] = carry % 10;
        carry = Math.floor(carry / 10);

        i++;
        k = Math.floor(k / 10);
    }

    num.reverse();
    return num;
};
