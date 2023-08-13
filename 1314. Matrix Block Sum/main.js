/*

Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

i - k <= r <= i + k,
j - k <= c <= j + k, and
(r, c) is a valid position in the matrix.

*/

// solution

// var matrixBlockSum = function (mat, k) {
//     const m = mat.length;
//     const n = mat[0].length;
//     const res = [];

//     for (let i = 0; i < m; i++) {
//         res[i] = [];
//         for (let j = 0; j < n; j++) {
//             let sum = 0;

//             const rStart = Math.max(0, i - k);
//             const rEnd = Math.min(m - 1, i + k);
//             const cStart = Math.max(0, j - k);
//             const cEnd = Math.min(n - 1, j + k);

//             for (let r = rStart; r <= rEnd; r++) {
//                 for (let c = cStart; c <= cEnd; c++) {
//                     sum += mat[r][c];
//                 }
//             }

//             res[i][j] = sum;
//         }
//     }

//     return res;
// };

var matrixBlockSum = function (mat, k) {
    const m = mat.length;
    const n = mat[0].length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    const res = [];

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] =
                mat[i - 1][j - 1] +
                dp[i - 1][j] +
                dp[i][j - 1] -
                dp[i - 1][j - 1];
        }
    }

    for (let i = 0; i < m; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++) {
            const rStart = Math.max(0, i - k);
            const rEnd = Math.min(m - 1, i + k);
            const cStart = Math.max(0, j - k);
            const cEnd = Math.min(n - 1, j + k);

            res[i][j] =
                dp[rEnd + 1][cEnd + 1] -
                dp[rEnd + 1][cStart] -
                dp[rStart][cEnd + 1] +
                dp[rStart][cStart];
        }
    }

    return res;
};
