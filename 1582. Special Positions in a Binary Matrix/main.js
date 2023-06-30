/*

Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

*/

// solution

var numSpecial = function (mat) {
    const m = mat.length;
    const n = mat[0].length;

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                let isSpecial = true;

                for (let col = 0; col < n; col++) {
                    if (col !== j && mat[i][col] === 1) {
                        isSpecial = false;
                        break;
                    }
                }

                for (let row = 0; row < m; row++) {
                    if (row !== i && mat[row][j] === 1) {
                        isSpecial = false;
                        break;
                    }
                }

                if (isSpecial) {
                    count++;
                }
            }
        }
    }

    return count;
};
