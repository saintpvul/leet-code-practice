/*

Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

*/

// solution

var shiftGrid = function (grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const shifts = k % (m * n);

    for (let s = 0; s < shifts; s++) {
        let prev = grid[m - 1][n - 1];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let temp = grid[i][j];
                grid[i][j] = prev;
                prev = temp;
            }
        }
    }

    return grid;
};
