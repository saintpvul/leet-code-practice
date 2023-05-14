/*

You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).

We view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return the total area of all three projections.

*/

// solution

var projectionArea = function (grid) {
    const n = grid.length;
    let xyProj = 0;
    let yzProj = 0;
    let zxProj = 0;

    for (let i = 0; i < n; i++) {
        let maxRow = 0;
        let maxCol = 0;

        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                xyProj++;
            }
            maxRow = Math.max(maxRow, grid[i][j]);
            maxCol = Math.max(maxCol, grid[j][i]);
        }

        yzProj += maxRow;
        zxProj += maxCol;
    }

    return xyProj + yzProj + zxProj;
};
