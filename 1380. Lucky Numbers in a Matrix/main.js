/*

Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

*/

// solution

var luckyNumbers = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const luckyNumbers = [];
    for (let i = 0; i < m; i++) {
        let minIndex = 0;
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] < matrix[i][minIndex]) {
                minIndex = j;
            }
        }

        let maxInColumn = true;
        for (let k = 0; k < m; k++) {
            if (matrix[k][minIndex] > matrix[i][minIndex]) {
                maxInColumn = false;
                break;
            }
        }

        if (maxInColumn) {
            luckyNumbers.push(matrix[i][minIndex]);
        }
    }

    return luckyNumbers;
};
