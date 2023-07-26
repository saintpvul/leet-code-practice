/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

// solution

var isValidSudoku = function (board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j];

            if (cell != ".") {
                const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (
                    rows[i].has(cell) ||
                    cols[j].has(cell) ||
                    boxes[boxIdx].has(cell)
                ) {
                    return false;
                }

                rows[i].add(cell);
                cols[j].add(cell);
                boxes[boxIdx].add(cell);
            }
        }
    }
    return true;
};
