/*

Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

Two nodes of a binary tree are cousins if they have the same depth with different parents.

Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

*/

// solution

var isCousins = function (root, x, y) {
    let depthX = -1;
    let depthY = -1;
    let parentX = null;
    let parentY = null;

    const traverse = (node, depth, parent) => {
        if (node === null) return;

        if (node.val === x) {
            depthX = depth;
            parentX = parent;
        } else if (node.val === y) {
            depthY = depth;
            parentY = parent;
        }

        if (depthX !== -1 && depthY !== -1) {
            return;
        }

        traverse(node.left, depth + 1, node);
        traverse(node.right, depth + 1, node);
    };

    traverse(root, 0, null);

    return depthX === depthY && parentX !== parentY;
};
