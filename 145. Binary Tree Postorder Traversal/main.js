/*

Given the root of a binary tree, return the postorder traversal of its nodes' values.

*/

// solution

var postorderTraversal = function (root) {
    let res = [];
    const check = (node) => {
        if (!node) return;
        check(node.left);
        check(node.right);
        res.push(node.val);
    };
    check(root);
    return res;
};
