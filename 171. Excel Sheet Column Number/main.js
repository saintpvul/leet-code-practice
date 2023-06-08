/*

Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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

var titleToNumber = function (columnTitle) {
    let res = 0;

    while (columnTitle.length > 0) {
        const firstLetter = columnTitle.slice(0, 1);

        const number = firstLetter.charCodeAt(0) - 65 + 1;
        res = res * 26 + number;

        columnTitle = columnTitle.slice(1);
    }

    return res;
};
