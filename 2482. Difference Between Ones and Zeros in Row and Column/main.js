/*

You are given a 0-indexed m x n binary matrix grid.

A 0-indexed m x n difference matrix diff is created with the following procedure:

Let the number of ones in the ith row be onesRowi.
Let the number of ones in the jth column be onesColj.
Let the number of zeros in the ith row be zerosRowi.
Let the number of zeros in the jth column be zerosColj.
diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
Return the difference matrix diff.

*/

// solution

var onesMinusZeros = function (grid) {
    const n = grid[0].length;
    const m = grid.length;
    const diff = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0)
    );

    const onesRow = Array.from({ length: m }, () => 0);
    const zerosRow = Array.from({ length: m }, () => 0);
    const onesCol = Array.from({ length: n }, () => 0);
    const zerosCol = Array.from({ length: n }, () => 0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                onesRow[i]++;
                onesCol[j]++;
            } else {
                zerosRow[i]++;
                zerosCol[j]++;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return diff;
};
