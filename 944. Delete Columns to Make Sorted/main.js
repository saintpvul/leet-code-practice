/*

You are given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.

For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
abc
bce
cae
You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

Return the number of columns that you will delete.

*/

// solution

var minDeletionSize = function (strs) {
    const n = strs.length;
    const m = strs[0].length;
    let count = 0;

    for (let col = 0; col < m; col++) {
        for (let row = 1; row < n; row++) {
            if (strs[row][col] < strs[row - 1][col]) {
                count++;
                break;
            }
        }
    }

    return count;
};
