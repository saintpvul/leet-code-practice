/*

You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.

*/

// solution

var sumRootToLeaf = function (root) {
    if (root === null) {
        return 0;
    }

    let sum = 0;

    function traverse(node, current) {
        if (node.left === null && node.right === null) {
            sum += parseInt(current + node.val, 2);
        } else {
            const newCurrent = current + node.val;

            if (node.left !== null) {
                traverse(node.left, newCurrent);
            }
            if (node.right !== null) {
                traverse(node.right, newCurrent);
            }
        }
    }

    traverse(root, "");

    return sum;
};