/*

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

*/

// solution

var convertToTitle = function (columnNumber) {
    let result = "";

    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % 26;
        let char = String.fromCharCode(65 + remainder);

        result = char + result;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    return result;
};
