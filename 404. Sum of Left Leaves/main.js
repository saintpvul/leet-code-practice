/*

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

*/

// solution

var sumOfLeftLeaves = function (root) {
    let sum = 0;

    let checkLeft = (node) => {
        if (!node) return;

        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }

        checkLeft(node.left);
        checkLeft(node.right);
    };
    checkLeft(root);
    return sum;
};
