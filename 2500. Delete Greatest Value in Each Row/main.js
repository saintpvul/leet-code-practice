/*

You are given an m x n matrix grid consisting of positive integers.

Perform the following operation until grid becomes empty:

Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
Add the maximum of deleted elements to the answer.
Note that the number of columns decreases by one after each operation.

Return the answer after performing the operations described above.

*/

// solution

var deleteGreatestValue = function (grid) {
    let deleted = 0;

    while (grid[0].length) {
        let currentMax = 0;
        let maxVals = [];
        for (let i = 0; i < grid.length; i++) {
            let max = Math.max(...grid[i]);
            maxVals.push(max);
            grid[i].splice(grid[i].indexOf(max), 1);
        }
        currentMax = Math.max(...maxVals);
        deleted += currentMax;
    }
    return deleted;
};
