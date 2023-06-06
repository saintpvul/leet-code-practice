/*

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

*/

// solution

// var minDepth = function (root) {
//     if (!root) {
//         return 0;
//     }

//     if (!root.left && !root.right) {
//         return 1;
//     }

//     if (!root.left) {
//         return 1 + minDepth(root.right);
//     }

//     if (!root.right) {
//         return 1 + minDepth(root.left);
//     }

//     return 1 + Math.min(minDepth(root.left), minDepth(root.right));
// };

var minDepth = function (root) {
    if (!root) {
        return 0;
    }

    let min = Infinity;

    const dive = (node, depth) => {
        if (!node.left && !node.right) {
            min = Math.min(min, depth);
            return;
        }

        if (node.left) {
            dive(node.left, depth + 1);
        }

        if (node.right) {
            dive(node.right, depth + 1);
        }
    };

    dive(root, 1);
    return min;
};
