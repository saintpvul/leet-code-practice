/*

Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

*/

// solution

var checkOnesSegment = function (s) {
    let segmentFound = false;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === "1" && s[i - 1] === "0") {
            if (segmentFound) {
                return false;
            }
        } else if (s[i] === "0" && s[i - 1] === "1") {
            segmentFound = true;
        }
    }
    return true;
};
