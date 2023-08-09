/*

You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.

Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies the rowSum and colSum requirements.

Return a 2D array representing any matrix that fulfills the requirements. It's guaranteed that at least one matrix that fulfills the requirements exists.

*/

// solution

var restoreMatrix = function (rowSum, colSum) {
    const rowCount = rowSum.length;
    const colCount = colSum.length;

    const m = Array.from({ length: rowCount }, () =>
        Array.from({ length: colCount }, () => 0)
    );
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            m[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= m[i][j];
            colSum[j] -= m[i][j];
        }
    }
    return m;
};
