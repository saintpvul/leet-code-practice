/*

There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

*/

// solution

var validPath = function (n, edges, source, destination) {
    const graph = {};
    for (const [n1, n2] of edges) {
        if (!graph[n1]) {
            graph[n1] = [];
        }
        if (!graph[n2]) {
            graph[n2] = [];
        }
        graph[n1].push(n2);
        graph[n2].push(n1);
    }

    const visited = new Set();
    const route = new Set([source]);

    while (route.size > 0) {
        const node = Array.from(route).pop();
        if (node === destination) {
            return true;
        }

        visited.add(node);
        route.delete(node);

        const neighbors = graph[node] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                route.add(neighbor);
            }
        }
    }

    return false;
};
