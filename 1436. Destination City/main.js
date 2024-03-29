/*

You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

*/

// solution

var destCity = function (paths) {
    let map = new Map();
    for (let path of paths) {
        map.set(path[0]);
    }

    for (let path of paths) {
        if (!map.has(path[1])) {
            return path[1];
        }
    }
};
