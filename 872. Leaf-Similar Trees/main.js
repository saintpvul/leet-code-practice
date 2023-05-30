/*

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

*/

// solution

var leafSimilar = function (root1, root2) {
    const getLeaves = (node, leaves) => {
        if (!node) return;
        if (!node.left && !node.right) leaves.push(node.val);
        getLeaves(node.left, leaves);
        getLeaves(node.right, leaves);
    };

    let leaves1 = [];
    let leaves2 = [];

    getLeaves(root1, leaves1);
    getLeaves(root2, leaves2);

    if (leaves1.length != leaves2.length) return false;

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] != leaves2[i]) return false;
    }

    return true;
};
