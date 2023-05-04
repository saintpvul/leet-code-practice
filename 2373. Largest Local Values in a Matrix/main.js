/*

You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.

*/

// solution

var largestLocal = function (grid) {
    const n = grid.length - 2;
    const maxLocal = new Array(n);
    for (let i = 0; i < n; i++) {
        maxLocal[i] = new Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            let maxVal = Number.MIN_SAFE_INTEGER;
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    if (grid[k][l] > maxVal) {
                        maxVal = grid[k][l];
                    }
                }
            }
            maxLocal[i][j] = maxVal;
        }
    }
    return maxLocal;
};
