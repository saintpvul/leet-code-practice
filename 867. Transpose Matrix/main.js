/*

Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

*/

// solution

var transpose = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let newMatrix = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(matrix[j][i]);
        }
        newMatrix.push(row);
    }
    return newMatrix;
};
