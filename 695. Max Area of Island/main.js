/*

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

*/

// solution

var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let area = exploreIsland(grid, i, j);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
};
const exploreIsland = (grid, i, j) => {
    if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] === 0
    ) {
        return 0;
    }
    grid[i][j] = 0;
    let area = 1;
    area += exploreIsland(grid, i + 1, j);
    area += exploreIsland(grid, i - 1, j);
    area += exploreIsland(grid, i, j + 1);
    area += exploreIsland(grid, i, j - 1);
    return area;
};
