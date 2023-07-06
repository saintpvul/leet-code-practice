/*

Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

*/

// solution

var checkZeroOnes = function (s) {
    let countOnes = 0;
    let countZeros = 0;
    let currentCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            currentCount++;
            countOnes = Math.max(countOnes, currentCount);
        } else {
            currentCount = 0;
        }
    }

    currentCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            currentCount++;
            countZeros = Math.max(countZeros, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return countOnes > countZeros;
};
