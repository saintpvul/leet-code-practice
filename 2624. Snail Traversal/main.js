/*

Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order. Invalid input values should output an empty array. If rowsCount * colsCount !== nums.length, the input is considered invalid.

Snail traversal order starts at the top left cell with the first value of the current array. It then moves through the entire first column from top to bottom, followed by moving to the next column on the right and traversing it from bottom to top. This pattern continues, alternating the direction of traversal with each column, until the entire current array is covered. For example, when given the input array [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] with rowsCount = 5 and colsCount = 4, the desired output matrix is shown below. Note that iterating the matrix following the arrows corresponds to the order of numbers in the original array.

*/

//

Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) {
        return [];
    }

    let res = Array.from({ length: rowsCount }, () => []);

    for (let j = 0; j < this.length; j++) {
        const i = Math.floor(j / rowsCount);
        if (!(i % 2)) {
            res[j % rowsCount][i] = this[j];
        } else {
            res[rowsCount - 1 - (j % rowsCount)][i] = this[j];
        }
    }

    return res;
};
