/*

You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return the number of maximum integers in the matrix after performing all the operations.

*/

// solution

var maxCount = function (m, n, ops) {
    for (let i = 0; i < ops.length; i++) {
        m = Math.min(m, ops[i][0]);
        n = Math.min(n, ops[i][1]);
    }
    return m * n;
};
