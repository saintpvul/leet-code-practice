/*

Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

A full binary tree is a binary tree where each node has exactly 0 or 2 children.

*/

// solution

var allPossibleFBT = function(n) {
     if (n === 1) {
        return [new TreeNode(0)];
    }

    const result = [];
 
    for (let i = 1; i < n; i += 2) {
        const leftTrees = allPossibleFBT(i);
        const rightTrees = allPossibleFBT(n - i - 1);
 
        for (const leftTree of leftTrees) {
            for (const rightTree of rightTrees) {
                const root = new TreeNode(0);
                root.left = leftTree;
                root.right = rightTree;
                result.push(root);
            }
        }
    }

    return result;
};