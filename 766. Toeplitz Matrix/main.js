/*

Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

*/

// solution

var isToeplitzMatrix = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    for (let row = 0; row < n - 1; row++) {
        for (let col = 0; col < m - 1; col++) {
            if (matrix[row][col] !== matrix[row + 1][col + 1]) {
                return false;
            }
        }
    }

    return true;
};
