/*

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.

*/

// solution

var freqAlphabets = function (s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        let char = "";
        if (i < s.length - 2 && s[i + 2] === "#") {
            char = s[i] + s[i + 1];
            i += 2;
        } else {
            char = s[i];
        }
        res += String.fromCharCode(+char + 96);
    }
    return res;
};
