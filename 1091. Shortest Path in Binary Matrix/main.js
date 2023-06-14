/*

Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

*/

// solution

var shortestPathBinaryMatrix = function (grid) {
    const n = grid.length;
    const dir = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
    ];

    const isValid = (row, col, visited) =>
        row >= 0 && row < n && col >= 0 && col < n && !visited[row][col];

    const bfs = (grid, visited) => {
        const que = [[0, 0, 1]];
        visited[0][0] = true;

        while (que.length > 0) {
            const [row, col, dist] = que.shift();

            if (row === n - 1 && col === n - 1) {
                return dist;
            }

            for (const [r, c] of dir) {
                const newR = row + r;
                const newC = col + c;

                if (isValid(newR, newC, visited) && grid[newR][newC] === 0) {
                    visited[newR][newC] = true;
                    que.push([newR, newC, dist + 1]);
                }
            }
        }
        return -1;
    };

    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
        return -1;
    }

    const visited = Array(n)
        .fill(false)
        .map(() => Array(n).fill(false));

    return bfs(grid, visited);
};
