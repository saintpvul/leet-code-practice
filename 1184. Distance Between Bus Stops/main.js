/*

A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

*/

// solution

var distanceBetweenBusStops = function (distance, start, destination) {
    const n = distance.length;

    let clockwiseDistance = 0;
    for (let i = start; i !== destination; i = (i + 1) % n) {
        clockwiseDistance += distance[i];
    }

    let counterclockwiseDistance = 0;
    for (let i = destination; i !== start; i = (i + 1) % n) {
        counterclockwiseDistance += distance[i];
    }

    const shortestDistance = Math.min(
        clockwiseDistance,
        counterclockwiseDistance
    );
    return shortestDistance;
};
