/*

You are given a binary string s consisting only of zeroes and ones.

A substring of s is considered balanced if all zeroes are before ones and the number of zeroes is equal to the number of ones inside the substring. Notice that the empty substring is considered a balanced substring.

Return the length of the longest balanced substring of s.

A substring is a contiguous sequence of characters within a string.

*/

// solution

var findTheLongestBalancedSubstring = function (s) {
    const n = s.length;
    let max = 0;

    const check = (i, j) => {
        let cnt = 0;
        for (let k = i; k <= j; k++) {
            if (s[k] === "1") {
                cnt++;
            } else if (cnt > 0) {
                return false;
            }
        }
        return cnt * 2 === j - i + 1;
    };

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j += 2) {
            if (check(i, j)) {
                max = Math.max(max, j - i + 1);
            }
        }
    }

    return max;
};
