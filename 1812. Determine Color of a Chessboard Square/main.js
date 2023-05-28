/*

You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

*/

// solution

var squareIsWhite = function (coordinates) {
    const char = coordinates[0];
    const place = coordinates[1];
    if (
        (!(place % 2) && /[aceg]/.test(char)) ||
        (place % 2 && /[bdfh]/.test(char))
    ) {
        return true;
    }
    return false;
};
