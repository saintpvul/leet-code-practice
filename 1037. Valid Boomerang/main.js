/*

Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

A boomerang is a set of three points that are all distinct and not in a straight line.

*/

// solution

var isBoomerang = function (points) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    const [x3, y3] = points[2];

    if (
        (x1 === x2 && y1 === y2) ||
        (x1 === x3 && y1 === y3) ||
        (x2 === x3 && y2 === y3)
    ) {
        return false;
    }

    const crossProduct = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);

    if (crossProduct === 0) {
        return false;
    }

    return true;
};
