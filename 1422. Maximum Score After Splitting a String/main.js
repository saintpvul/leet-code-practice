/*

Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

*/

// solution

var maxScore = function (s) {
    let maxScore = 0;

    let zerosLeft = 0;
    let onesRight = s.split("1").length - 1;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            zerosLeft++;
        } else {
            onesRight--;
        }
        maxScore = Math.max(maxScore, zerosLeft + onesRight);
    }

    return maxScore;
};
