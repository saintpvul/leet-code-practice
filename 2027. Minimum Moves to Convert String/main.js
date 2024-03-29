/*

You are given a string s consisting of n characters which are either 'X' or 'O'.

A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

Return the minimum number of moves required so that all the characters of s are converted to 'O'. 

*/

// solution

var minimumMoves = function (s) {
    let moves = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        if (s[i] === "X") {
            moves++;
            i += 2;
        }
    }

    return moves;
};
