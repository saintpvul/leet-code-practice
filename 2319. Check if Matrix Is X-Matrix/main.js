/*

A square matrix is said to be an X-Matrix if both of the following conditions hold:

All the elements in the diagonals of the matrix are non-zero.
All other elements are 0.
Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

*/

// solution

var checkXMatrix = function (grid) {
    const n = grid.length;

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i === j || i + j === n - 1) {
                if (!grid[i][j]) {
                    return false;
                }
            } else if (grid[i][j]) {
                return false;
            }
        }
    }
    return true;
};
