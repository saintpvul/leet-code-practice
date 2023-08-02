/*

A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

*/

// solution


var diagonalSort = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
 
    const sortDiagonal = (row, col) => {
        const diagonal = [];
        while (row < m && col < n) {
            diagonal.push(mat[row][col]);
            row++;
            col++;
        }
        diagonal.sort((a, b) => a - b);
        while (row > 0 && col > 0) {
            row--;
            col--;
            mat[row][col] = diagonal.pop();
        }
    };
 
    for (let row = 0; row < m; row++) {
        sortDiagonal(row, 0);
    }
 
    for (let col = 1; col < n; col++) {
        sortDiagonal(0, col);
    }

    return mat;
};