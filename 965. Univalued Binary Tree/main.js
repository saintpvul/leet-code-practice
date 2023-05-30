/*

A binary tree is uni-valued if every node in the tree has the same value.

Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

*/

// solution

var isUnivalTree = function (root) {
    const check = (node, v) => {
        if (!node) return true;
        if (node.val != v) return false;
        return check(node.left, v) && check(node.right, v);
    };
    return check(root, root.val);
};
