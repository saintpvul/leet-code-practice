/*

Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

Players take turns placing characters into empty squares ' '.
The first player A always places 'X' characters, while the second player B always places 'O' characters.
'X' and 'O' characters are always placed into empty squares, never on filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

*/

// solution

var tictactoe = function (moves) {
    const grid = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ];

    const checkWinner = (player) => {
        for (let i = 0; i < 3; i++) {
            if (
                grid[i][0] === player &&
                grid[i][1] === player &&
                grid[i][2] === player
            ) {
                return true;
            }
        }

        for (let j = 0; j < 3; j++) {
            if (
                grid[0][j] === player &&
                grid[1][j] === player &&
                grid[2][j] === player
            ) {
                return true;
            }
        }

        if (
            (grid[0][0] === player &&
                grid[1][1] === player &&
                grid[2][2] === player) ||
            (grid[0][2] === player &&
                grid[1][1] === player &&
                grid[2][0] === player)
        ) {
            return true;
        }

        return false;
    };

    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        const player = i % 2 === 0 ? "A" : "B";

        grid[row][col] = player;

        if (checkWinner(player)) {
            return player;
        }
    }

    if (moves.length === 9) {
        return "Draw";
    }

    return "Pending";
};
