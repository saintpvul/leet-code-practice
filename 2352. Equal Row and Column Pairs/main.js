/*

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

*/

// solution

var equalPairs = function (grid) {
    const n = grid.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let areEqual = true;

            for (let k = 0; k < n; k++) {
                if (grid[i][k] != grid[k][j]) {
                    areEqual = false;
                    break;
                }
            }
            if (areEqual) {
                count++;
            }
        }
    }
    return count;
};
