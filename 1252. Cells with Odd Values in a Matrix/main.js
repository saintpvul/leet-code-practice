/*

There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

*/

// solution

var oddCells = function (m, n, indices) {
    let matrix = Array(m)
        .fill()
        .map(() => Array(n).fill(0));
    let oddCount = 0;

    for (let i = 0; i < indices.length; i++) {
        let row = indices[i][0];
        let col = indices[i][1];

        for (let j = 0; j < n; j++) {
            matrix[row][j]++;
            if (matrix[row][j] % 2 !== 0) {
                oddCount++;
            } else {
                oddCount--;
            }
        }

        for (let j = 0; j < m; j++) {
            matrix[j][col]++;
            if (matrix[j][col] % 2 !== 0) {
                oddCount++;
            } else {
                oddCount--;
            }
        }
    }

    return oddCount;
};
