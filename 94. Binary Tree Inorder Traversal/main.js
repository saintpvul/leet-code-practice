/*

Given the root of a binary tree, return the inorder traversal of its nodes' values.

*/

// solution

var inorderTraversal = function (root) {
    let res = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    };
    traverse(root);
    return res;
};
