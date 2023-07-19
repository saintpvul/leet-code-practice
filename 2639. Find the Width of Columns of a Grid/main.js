/*

You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its integers.

For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
Return an integer array ans of size n where ans[i] is the width of the ith column.

The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.

*/

// solution

var findColumnWidth = function (grid) {
    const n = grid[0].length;
    let ans = [];

    for (let i = 0; i < n; i++) {
        let currentMax = 0;
        for (let j = 0; j < grid.length; j++) {
            let current = grid[j][i].toString().length;
            currentMax = Math.max(current, currentMax);
        }
        ans.push(currentMax);
    }

    return ans;
};
