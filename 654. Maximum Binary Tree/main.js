/*

You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

Create a root node whose value is the maximum value in nums.
Recursively build the left subtree on the subarray prefix to the left of the maximum value.
Recursively build the right subtree on the subarray suffix to the right of the maximum value.
Return the maximum binary tree built from nums.

*/

// solution

var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null;

    const max = Math.max(...nums);
    const maxIdx = nums.indexOf(max);

    const root = new TreeNode(max);

    root.left = constructMaximumBinaryTree(nums.slice(0, maxIdx));
    root.right = constructMaximumBinaryTree(nums.slice(maxIdx + 1));

    return root;
};
