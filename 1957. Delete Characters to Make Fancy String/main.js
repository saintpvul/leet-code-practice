/*

A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.

*/

// solution

var makeFancyString = function (s) {
    let res = "";
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count < 3) {
            res += s[i - 1];
        }
    }

    res += s[s.length - 1];

    return res;
};
