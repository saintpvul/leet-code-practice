/*

Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

A subtree of a node node is node plus every node that is a descendant of node.

*/

// solution

var pruneTree = function (root) {
    if (!root) return null;

    const contains = (node) => {
        if (!node) return false;

        const left = contains(node.left);
        const right = contains(node.right);

        if (!left) {
            node.left = null;
        }
        if (!right) {
            node.right = null;
        }

        return node.val === 1 || left || right;
    };
    if (!contains(root)) {
        return null;
    }

    return root;
};
