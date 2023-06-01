/*

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

*/

// solution

var getMinimumDifference = function (root) {
    const inorderTraversal = (node, values) => {
        if (!node) return;

        inorderTraversal(node.left, values);
        values.push(node.val);
        inorderTraversal(node.right, values);
    };

    const values = [];
    inorderTraversal(root, values);

    values.sort((a, b) => a - b);

    let minDiff = Infinity;
    for (let i = 1; i < values.length; i++) {
        const diff = values[i] - values[i - 1];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};
