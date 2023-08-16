/*

You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.

*/

// solution

var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const direct = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    const res = [[rStart, cStart]];
    const n = rows * cols;
    let l = 1;
    let ind = 1;

    while (res.length < n) {
        for (let _ = 0; _ < 2; _++) {
            for (let __ = 0; __ < l; __++) {
                rStart += direct[ind][0];
                cStart += direct[ind][1];

                if (
                    rStart >= 0 &&
                    rStart < rows &&
                    cStart >= 0 &&
                    cStart < cols
                ) {
                    res.push([rStart, cStart]);
                }
            }
            ind = (ind + 1) % 4;
        }
        l++;
    }

    return res;
};
