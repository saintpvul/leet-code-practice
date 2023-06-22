/*

Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

*/

// solution

var binaryGap = function (n) {
    let maxDist = 0;
    n = n.toString(2);

    let prevIdx = -1;
    for (let i = 0; i < n.length; i++) {
        if (n[i] === "1") {
            if (prevIdx != -1) {
                maxDist = Math.max(maxDist, i - prevIdx);
            }
            prevIdx = i;
        }
    }
    return maxDist;
};
