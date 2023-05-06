/*

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

*/

// solution

var balancedStringSplit = function (s) {
    let count = 0;
    let balance = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "L") {
            balance++;
        } else {
            balance--;
        }
        if (balance == 0) {
            count++;
        }
    }
    return count;
};
