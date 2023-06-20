/*

Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

*/

// solution

var largestTriangleArea = function (points) {
    let maxArea = 0;

    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i + 1; j < points.length - 1; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];

                const area =
                    0.5 *
                    Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};
