/*

Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

*/

// solution

var balanceBST = function (root) {
    const inorderTraversal = (node, values) => {
        if (node === null) return;
        inorderTraversal(node.left, values);
        values.push(node.val);
        inorderTraversal(node.right, values);
    };

    const constructBST = (values, left, right) => {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(values[mid]);

        node.left = constructBST(values, left, mid - 1);
        node.right = constructBST(values, mid + 1, right);
        return node;
    };

    const values = [];
    inorderTraversal(root, values);
    return constructBST(values, 0, values.length - 1);
};
