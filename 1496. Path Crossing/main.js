/*

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

*/

// solution

var isPathCrossing = function (path) {
    const visited = new Set();
    let x = 0;
    let y = 0;
    visited.add(`${x},${y}`);

    for (let i = 0; i < path.length; i++) {
        const currentPath = path[i];

        switch (currentPath) {
            case "N":
                y++;
                break;
            case "S":
                y--;
                break;
            case "E":
                x++;
                break;
            case "W":
                x--;
                break;
        }

        const currentPosition = `${x},${y}`;
        if (visited.has(currentPosition)) {
            return true;
        }
        visited.add(currentPosition);
    }

    return false;
};
