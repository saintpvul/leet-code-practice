/*

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

*/

// solution

var goodNodes = function (root) {
    let count = 0;

    if (!root) return 0;

    const dfs = (node, prevMax) => {
        if (!node) {
            return;
        }

        if (node.val >= prevMax) {
            count++;
        }

        prevMax = Math.max(prevMax, node.val);

        dfs(node.left, prevMax);
        dfs(node.right, prevMax);
    };

    dfs(root, root.val);
    return count;
};
