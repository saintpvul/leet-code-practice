/*

Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:

The node of a binary tree is a leaf if and only if it has no children
The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.

*/

// solution

var lcaDeepestLeaves = function (root) {
    const findDepth = (node) => {
        if (node === null) {
            return 0;
        }
        return 1 + Math.max(findDepth(node.left), findDepth(node.right));
    };

    const findLCA = (node, depth) => {
        if (node === null) {
            return null;
        }
        if (depth === 0) {
            return node;
        }

        const leftLCA = findLCA(node.left, depth - 1);
        const rightLCA = findLCA(node.right, depth - 1);

        if (leftLCA !== null && rightLCA !== null) {
            return node;
        } else if (leftLCA !== null) {
            return leftLCA;
        } else {
            return rightLCA;
        }
    };

    const maxDepth = findDepth(root);
    return findLCA(root, maxDepth - 1);
};
