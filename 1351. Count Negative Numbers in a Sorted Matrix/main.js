/*

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

*/

// solution

// var countNegatives = function (grid) {
//     let neg = 0;
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] < 0) neg++;
//         }
//     }
//     return neg;
// };

// bit faster

var countNegatives = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    let col = cols - 1;
    let row = 0;

    while (col >= 0 && row < rows) {
        if (grid[row][col] < 0) {
            count += rows - row;
            col--;
        } else {
            row++;
        }
    }

    return count;
};
