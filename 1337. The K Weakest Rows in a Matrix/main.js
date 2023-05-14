/*

You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

*/

// solution

var kWeakestRows = function (mat, k) {
    const rows = mat.length;
    const cols = mat[0].length;

    const counts = [];

    for (let i = 0; i < rows; i++) {
        let count = 0;

        for (let j = 0; j < cols && mat[i][j] === 1; j++) {
            count++;
        }
        counts.push({ row: i, count: count });
    }

    counts.sort((a, b) =>
        a.count === b.count ? a.row - b.row : a.count - b.count
    );

    const res = [];

    for (let i = 0; i < k; i++) {
        res.push(counts[i].row);
    }

    return res;
};
