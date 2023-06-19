/*

Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

*/

// solution

var countBinarySubstrings = function (s) {
    let count = 0;
    let prev = 0;
    let curr = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curr++;
        } else {
            count += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        }
    }

    count += Math.min(curr, prev);
    return count;
};
