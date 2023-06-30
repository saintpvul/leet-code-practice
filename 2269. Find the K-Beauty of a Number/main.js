/*

The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.

*/

// solution

var divisorSubstrings = function (num, k) {
    let divisors = 0;

    let str = num.toString();

    for (let i = 0; i < str.length - k + 1; i++) {
        const div = str.substring(i, i + k);
        const divSum = div.split("").reduce((s, v) => s + +v, 0);
        if (divSum != 0) {
            if (num % +div === 0) {
                divisors++;
            }
        }
    }
    return divisors;
};
