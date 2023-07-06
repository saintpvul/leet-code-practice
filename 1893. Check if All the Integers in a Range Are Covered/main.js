/*

You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

*/

// solution

var isCovered = function (ranges, left, right) {
    let coverage = {};

    for (let i = left; i <= right; i++) {
        coverage[i] = 0;
    }

    for (let i = 0; i < ranges.length; i++) {
        const [start, end] = ranges[i];

        for (let j = start; j <= end; j++) {
            if (j >= left && j <= right) {
                coverage[j] = 1;
            }
        }
    }

    for (let i = left; i <= right; i++) {
        if (coverage[i] === 0) {
            return false;
        }
    }

    return true;
};
