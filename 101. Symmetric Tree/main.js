/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

*/

// solution

var isSymmetric = function (root) {
    const mirrorCheck = (node1, node2) => {
        if (!node1 && !node2) return true;

        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }
        return (
            mirrorCheck(node1.left, node2.right) &&
            mirrorCheck(node1.right, node2.left)
        );
    };

    return mirrorCheck(root, root);
};
