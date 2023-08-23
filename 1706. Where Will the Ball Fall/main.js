/*

You have a 2-D grid of size m x n representing a box, and you have n balls. The box is open on the top and bottom sides.

Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left.

A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as 1.
A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as -1.
We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a "V" shaped pattern between two boards or if a board redirects the ball into either wall of the box.

Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box.

*/

// solution

var findBall = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let dp = [...Array(n).keys()];
    const ans = Array.from({ length: n }, () => -1);

    for (let i = 0; i < m; i++) {
        const newDp = Array(n).fill(-1);
        for (let j = 0; j < n; j++) {
            if (j + grid[i][j] < 0 || j + grid[i][j] === n) {
                continue;
            }
            if (
                (grid[i][j] === 1 && grid[i][j + 1] === -1) ||
                (grid[i][j] === -1 && grid[i][j - 1] === 1)
            ) {
                continue;
            }
            newDp[j + grid[i][j]] = dp[j];
        }
        dp = newDp;
    }

    dp.forEach((ball, i) => {
        if (ball !== -1) {
            ans[ball] = i;
        }
    });

    return ans;
};
