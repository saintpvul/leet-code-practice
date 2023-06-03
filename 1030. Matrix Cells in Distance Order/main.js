/*

You are given four integers row, cols, rCenter, and cCenter. There is a rows x cols matrix and you are on the cell with the coordinates (rCenter, cCenter).

Return the coordinates of all cells in the matrix, sorted by their distance from (rCenter, cCenter) from the smallest distance to the largest distance. You may return the answer in any order that satisfies this condition.

The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.

*/

// solution

var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    const result = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result.push([i, j]);
        }
    }

    result.sort((a, b) => {
        const distanceA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
        const distanceB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
        return distanceA - distanceB;
    });

    return result;
};
