/*

Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

*/

// solution

var maxAncestorDiff = function (root) {
    let res = 0;

    const dfs = (node, min, max) => {
        if (!node) return;
        res = Math.max(res, Math.abs(node.val - min), Math.abs(node.val - max));

        min = Math.min(min, node.val);
        max = Math.max(max, node.val);
        dfs(node.left, min, max);
        dfs(node.right, min, max);
    };
    dfs(root, root.val, root.val);

    return res;
};
