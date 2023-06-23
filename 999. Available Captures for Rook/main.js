/*

On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.

When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.

Return the number of available captures for the white rook.

*/

// solution

var numRookCaptures = function (board) {
    let rookRow, rookCol;
    let captures = 0;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === "R") {
                rookRow = i;
                rookCol = j;
                break;
            }
        }
    }

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    for (const [dx, dy] of directions) {
        let row = rookRow + dx;
        let col = rookCol + dy;

        while (row >= 0 && row < 8 && col >= 0 && col < 8) {
            if (board[row][col] === "p") {
                captures++;
                break;
            } else if (board[row][col] === "B") {
                break;
            }

            row += dx;
            col += dy;
        }
    }

    return captures;
};
