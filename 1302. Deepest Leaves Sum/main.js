/*

Given the root of a binary tree, return the sum of values of its deepest leaves.

*/

// solution

var deepestLeavesSum = function (root) {
    let values = 0;
    let maxDepth = 0;
    const getLeaf = (node, depth) => {
        if (!node) return;
        if (!node.left && !node.right) {
            if (depth === maxDepth) {
                values += node.val;
            } else if (depth > maxDepth) {
                values = node.val;
                maxDepth = depth;
            }
        }
        getLeaf(node.left, depth + 1);
        getLeaf(node.right, depth + 1);
    };

    getLeaf(root, 0);

    return values;
};
