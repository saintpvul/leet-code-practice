/*

Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

*/

// solution

var findTarget = function (root, k) {
    const visited = new Set();

    const findSum = (node, target) => {
        if (node === null) return false;

        const diff = target - node.val;

        if (visited.has(diff)) return true;

        visited.add(node.val);

        return findSum(node.left, target) || findSum(node.right, target);
    };
    return findSum(root, k);
};
