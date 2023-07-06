/*

You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.

*/

// solution

var largestOddNumber = function (num) {
    let largestOdd = "";

    for (let i = 0; i < num.length; i++) {
        if (+num[i] % 2 !== 0) {
            largestOdd = num.substring(0, i + 1);
        }
    }

    return largestOdd;
};
