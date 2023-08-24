/*

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

*/

// solution

var kthSmallest = function (root, k) {
    let result = null;
    let count = 0;

    const traverse = (node) => {
        if (!node) return;

        traverse(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        traverse(node.right);
    };

    traverse(root);
    return result;
};
