/*

Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.

*/

// solution

var subtreeWithAllDeepest = function (root) {
    let deepestNodes = [];
    let maxDepth = -1;

    const dfs = (node, depth) => {
        if (!node) return;

        if (depth > maxDepth) {
            deepestNodes = [node];
            maxDepth = depth;
        } else if (depth === maxDepth) {
            deepestNodes.push(node);
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);

    const lca = (node, depth) => {
        if (!node || depth === maxDepth) return node;

        const left = lca(node.left, depth + 1);
        const right = lca(node.right, depth + 1);

        if (left && right) return node;
        return left || right;
    };

    return lca(root, 0);
};
