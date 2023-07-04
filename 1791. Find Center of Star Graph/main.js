/*

There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

*/

// solution

var findCenter = function (edges) {
    const n = edges.length + 1;
    const degree = Array(n + 1).fill(0);

    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        degree[u]++;
        degree[v]++;

        if (degree[u] === n - 1) {
            return u;
        }

        if (degree[v] === n - 1) {
            return v;
        }
    }

    return -1;
};
