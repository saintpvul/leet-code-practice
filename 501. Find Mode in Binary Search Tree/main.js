/*

Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.

*/

// solution

var findMode = function (root) {
    let count = {};
    let max = null;
    const dive = (node) => {
        if (node === null) return;

        if (!node.left && !node.right) {
            if (count[node.val]) {
                count[node.val] += 1;
            } else {
                count[node.val] = 1;
            }

            if (max === null || count[node.val] > count[max]) {
                max = node.val;
            }
        } else {
            if (!count[node.val]) {
                count[node.val] = 0;
            }
            count[node.val] += 1;

            if (max === null || count[node.val] > count[max]) {
                max = node.val;
            }
        }
        dive(node.left);
        dive(node.right);
    };
    dive(root);

    return max;
};
