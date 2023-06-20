/*

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

*/

// solution

var rotateString = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        s = shift(s);
        if (s === goal) {
            return true;
        }
    }

    return false;
};

function shift(str) {
    return str.slice(1) + str[0];
}
