/*

Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

*/

// solution

var increasingBST = function (root) {
    const newNode = new TreeNode();
    let current = newNode;

    function inorder(node) {
        if (!node) {
            return;
        }
        inorder(node.left);

        current.right = new TreeNode(node.val);
        current = current.right;

        inorder(node.right);
    }

    inorder(root);
    return newNode.right;
};
