/*

Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

A grandparent of a node is the parent of its parent if it exists.

*/

// solution

var sumEvenGrandparent = function (root) {
    return dfs(root, null, null);
};

const dfs = (node, parent, grandparent) => {
    if (node === null) {
        return 0;
    }

    let sum = grandparent && !(grandparent.val % 2) ? node.val : 0;

    sum += dfs(node.left, node, parent);
    sum += dfs(node.right, node, parent);

    return sum;
};
