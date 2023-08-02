/*

Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.

*/

// solution


var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b)=> a[0] - b[0])
    let maxWidth = 0

    for(let i = 0; i < points.length - 1; i++){
        const diff = points[i + 1][0] - points[i][0]
        maxWidth = Math.max(maxWidth, diff)
    }

    return maxWidth
};