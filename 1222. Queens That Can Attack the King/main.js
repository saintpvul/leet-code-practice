/*

On a 0-indexed 8 x 8 chessboard, there can be multiple black queens ad one white king.

You are given a 2D integer array queens where queens[i] = [xQueeni, yQueeni] represents the position of the ith black queen on the chessboard. You are also given an integer array king of length 2 where king = [xKing, yKing] represents the position of the white king.

Return the coordinates of the black queens that can directly attack the king. You may return the answer in any order.

*/

// solution

var queensAttacktheKing = function (queens, king) {
    const queensSet = new Set(queens.map((q) => q[0] * 8 + q[1]));
    const dirs = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    const res = [];
    for (const [dx, dy] of dirs) {
        let x = king[0] + dx;
        let y = king[1] + dy;

        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            if (queensSet.has(x * 8 + y)) {
                res.push([x, y]);
                break;
            }
            x += dx;
            y += dy;
        }
    }
    return res;
};
