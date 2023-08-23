/*

You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

*/

// solution

var intervalIntersection = function (firstList, secondList) {
    const res = [];

    let i = 0,
        j = 0;

    while (i < firstList.length && j < secondList.length) {
        const [startA, endA] = firstList[i];
        const [startB, endB] = secondList[j];

        if (endA >= startB && endB >= startA) {
            res.push([Math.max(startA, startB), Math.min(endA, endB)]);
        }

        if (endA < endB) {
            i++;
        } else {
            j++;
        }
    }
    return res;
};
