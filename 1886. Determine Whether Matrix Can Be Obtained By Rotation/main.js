/*

Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

*/

// solution

var findRotation = function (mat, target) {
    const rotateMatrix = (matrix) => {
        const n = matrix.length;
        const rotated = Array.from({ length: n }, () => Array(n));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                rotated[i][j] = matrix[n - j - 1][i];
            }
        }

        return rotated;
    };

    for (let i = 0; i < 4; i++) {
        if (mat.toString() === target.toString()) {
            return true;
        }
        mat = rotateMatrix(mat);
    }

    return false;
};
