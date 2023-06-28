/*

The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.

*/

// solution

var maxPower = function (s) {
    let maxPower = 1;
    let currentPower = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currentPower++;
            maxPower = Math.max(maxPower, currentPower);
        } else {
            currentPower = 1;
        }
    }
    return maxPower;
};
