/*

An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

*/

// solution

// var checkValid = function (matrix) {
//     let n = matrix[0].length;

//     let colMatrix = [];

//     for (let i = 0; i < n; i++) {
//         let currRow = [];
//         for (let j = 0; j < matrix.length; j++) {
//             currRow.push(matrix[j][i]);
//         }
//         colMatrix.push(currRow);
//     }

//     for (let i = 0; i < matrix.length; i++) {
//         let numbers = new Map(
//             Array.from({ length: n }, (_, i) => [i + 1, false])
//         );
//         let rowNumbers = new Set(matrix[i]);
//         let colNumbers = new Set(colMatrix[i]);

//         for (let j = 0; j < n; j++) {
//             let number = matrix[i][j];
//             if (numbers.has(number) && !numbers.get(number)) {
//                 numbers.set(number, true);
//             }
//         }

//         for (let j = 1; j <= n; j++) {
//             if (!rowNumbers.has(j) || !colNumbers.has(j) || !numbers.get(j)) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };

// transposing values

var checkValid = function (matrix) {
    const n = matrix.length;

    const transposedMatrix = matrix.map((row, i) =>
        row.map((_, j) => matrix[j][i])
    );

    for (let i = 0; i < n; i++) {
        const rowNumbers = new Set(matrix[i]);
        const colNumbers = new Set(transposedMatrix[i]);

        for (let j = 1; j <= n; j++) {
            if (!rowNumbers.has(j) || !colNumbers.has(j)) {
                return false;
            }
        }
    }

    return true;
};

// both solutions are slow
