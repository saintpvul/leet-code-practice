/*

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

*/

// solution

var checkStraightLine = function (coordinates) {
    let x0 = coordinates[0][0];
    let y0 = coordinates[0][1];
    let x1 = coordinates[1][0];
    let y1 = coordinates[1][1];
    let dx = x1 - x0;
    let dy = y1 - y0;

    for (let i = 2; i < coordinates.length; ++i) {
        let x = coordinates[i][0];
        let y = coordinates[i][1];
        if ((x - x0) * dy !== (y - y0) * dx) return false;
    }

    return true;
};
