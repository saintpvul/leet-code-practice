/*

Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

*/

// solution

var tree2str = function (root) {
    if (!root) {
        return "";
    }

    const val = root.val;
    const left = tree2str(root.left);
    const right = tree2str(root.right);

    if (!right && !left) {
        return `${val}`;
    }
    if (!right) {
        return `${val}(${left})`;
    }
    return `${val}(${left})(${right})`;
};
