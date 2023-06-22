/*

You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).

After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes.

Return the total surface area of the resulting shapes.

Note: The bottom face of each shape counts toward its surface area.

*/

// solution

var surfaceArea = function (grid) {
    let n = grid.length;
    let area = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const v = grid[i][j];
            if (v > 0) {
                area += 2;

                const dir = [
                    [0, 1],
                    [0, -1],
                    [1, 0],
                    [-1, 0],
                ];
                for (const [dirX, dirY] of dir) {
                    const ni = i + dirX;
                    const nj = j + dirY;
                    if (ni < 0 || ni >= n || nj < 0 || nj >= n) {
                        area += v;
                    } else {
                        area += Math.max(0, v - grid[ni][nj]);
                    }
                }
            }
        }
    }
    return area;
};
