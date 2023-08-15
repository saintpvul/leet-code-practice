/*

You are given an m x n integer matrix grid.

We define an hourglass as a part of the matrix with the following form:


Return the maximum sum of the elements of an hourglass.

Note that an hourglass cannot be rotated and must be entirely contained within the matrix.

*/

// solution

var maxSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    let max = -Infinity;

    for (let i = 0; i < m - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            const houglass =
                grid[i][j] +
                grid[i][j + 1] +
                grid[i][j + 2] +
                grid[i + 1][j + 1] +
                grid[i + 2][j] +
                grid[i + 2][j + 1] +
                grid[i + 2][j + 2];

            max = Math.max(max, houglass);
        }
    }
    return max;
};
