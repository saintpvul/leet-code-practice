/*

Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.

*/

// solution

var findSmallestSetOfVertices = function (n, edges) {
    const res = [];
    const edgeSet = new Set();

    for (const edge of edges) {
        edgeSet.add(edge[1]);
    }

    for (let i = 0; i < n; i++) {
        if (!edgeSet.has(i)) {
            res.push(i);
        }
    }
    return res;
};
