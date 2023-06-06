/*

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

*/

// solution

var getRow = function (rowIndex) {
    let row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        let current = [1];
        for (let j = 1; j < i; j++) {
            current[j] = row[j - 1] + row[j];
        }
        current.push(1);
        row = current;
    }
    return row;
};
