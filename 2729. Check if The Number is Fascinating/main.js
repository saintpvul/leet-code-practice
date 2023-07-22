/*

You are given an integer n that consists of exactly 3 digits.

We call the number n fascinating if, after the following modification, the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

Concatenate n with the numbers 2 * n and 3 * n.
Return true if n is fascinating, or false otherwise.

Concatenating two numbers means joining them together. For example, the concatenation of 121 and 371 is 121371.

*/

// solution

var isFascinating = function (n) {
    const concated = "" + n + 2 * n + 3 * n;
    const dSet = new Set(concated);

    if (dSet.size !== 9 || dSet.has("0") || concated.length !== 9) {
        return false;
    }

    return true;
};
