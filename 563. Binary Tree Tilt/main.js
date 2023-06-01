/*

Given the root of a binary tree, return the sum of every tree node's tilt.

The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if the node does not have a right child.

*/

// solution

const sumTree = (node) => {
    if (!node) return 0;
    return node.val + sumTree(node.left) + sumTree(node.right);
};
var findTilt = function (root) {
    if (!root) return 0;
    const leftSum = sumTree(root.left);
    const rightSum = sumTree(root.right);
    const tilt = Math.abs(leftSum - rightSum);
    return tilt + findTilt(root.left) + findTilt(root.right);
};
