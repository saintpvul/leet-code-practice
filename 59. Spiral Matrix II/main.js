/*

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

*/

// solution

const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
let num = 1;
let row = 0,
    col = 0;
let dir = 0;

while (num <= n * n) {
    matrix[row][col] = num;
    num++;

    if (dir === 0) {
        if (col + 1 < n && matrix[row][col + 1] === 0) {
            col++;
        } else {
            dir = 1;
            row++;
        }
    } else if (dir === 1) {
        if (row + 1 < n && matrix[row + 1][col] === 0) {
            row++;
        } else {
            dir = 2;
            col--;
        }
    } else if (dir === 2) {
        if (col - 1 >= 0 && matrix[row][col - 1] === 0) {
            col--;
        } else {
            dir = 3;
            row--;
        }
    } else if (dir === 3) {
        if (row - 1 >= 0 && matrix[row - 1][col] === 0) {
            row--;
        } else {
            dir = 0;
            col++;
        }
    }
}

return matrix;
