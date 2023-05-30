/*

Given the root of a binary tree, return the preorder traversal of its nodes' values.

*/

// solution

var preorderTraversal = function (root) {
    let res = [];
    const check = (node) => {
        if (!node) return;
        res.push(node.val);
        check(node.left);
        check(node.right);
    };
    check(root);
    return res;
};
