/*

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

*/

// solution

var islandPerimeter = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let per = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                per += 4;
                if (i > 0 && grid[i - 1][j] === 1) {
                    per -= 2;
                }
                if (j > 0 && grid[i][j - 1] === 1) {
                    per -= 2;
                }
            }
        }
    }
    return per;
};
