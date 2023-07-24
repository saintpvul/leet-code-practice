/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

*/

// solution

var convert = function (s, numRows) {
    if (s.length <= numRows || numRows === 1) {
        return s;
    }

    const rows = Array.from({ length: numRows }, () => "");

    let row = 0;

    let direction = -1;

    for (let i = 0; i < s.length; i++) {
        rows[row] += s[i];

        if (row === 0 || row === numRows - 1) {
            direction = -direction;
        }

        row += direction;
    }

    return rows.join("");
};
