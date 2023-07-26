/*

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

*/

// solution

var solveSudoku = function (board) {
    const size = board[0].length;
    const rows = Array.from({ length: size }, () => new Set());
    const cols = Array.from({ length: size }, () => new Set());
    const boxes = Array.from({ length: size }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j];
            if (cell !== ".") {
                const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                rows[i].add(cell);
                cols[j].add(cell);
                boxes[boxIdx].add(cell);
            }
        }
    }

    const backtrack = (i, j) => {
        if (i === 9) {
            return true;
        }

        const nextRow = j === 8 ? i + 1 : i;
        const nextCol = j === 8 ? 0 : j + 1;

        if (board[i][j] === ".") {
            for (let num = 1; num <= 9; num++) {
                const strNum = num.toString();

                const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (
                    !rows[i].has(strNum) &&
                    !cols[j].has(strNum) &&
                    !boxes[boxIdx].has(strNum)
                ) {
                    rows[i].add(strNum);
                    cols[j].add(strNum);
                    boxes[boxIdx].add(strNum);
                    board[i][j] = strNum;

                    if (backtrack(nextRow, nextCol)) {
                        return true;
                    }

                    rows[i].delete(strNum);
                    cols[j].delete(strNum);
                    boxes[boxIdx].delete(strNum);
                    board[i][j] = ".";
                }
            }
        } else {
            return backtrack(nextRow, nextCol);
        }

        return false;
    };

    backtrack(0, 0);
    return board;
};
