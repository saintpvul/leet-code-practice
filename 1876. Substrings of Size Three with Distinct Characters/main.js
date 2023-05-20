/*

A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

*/

// solution

var countGoodSubstrings = function (s) {
    let counter = 0;

    for (let i = 0; i <= s.length - 3; i++) {
        let sub = s.substring(i, i + 3);
        if (sub.length === new Set(sub).size) {
            counter++;
        }
    }
    return counter;
};
