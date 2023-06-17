/*

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

*/

// solution

var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    function traverse(node) {
        if (node === null) {
            return 0;
        }

        const leftDepth = traverse(node.left);
        const rightDepth = traverse(node.right);

        diameter = Math.max(diameter, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    traverse(root);

    return diameter;
};
