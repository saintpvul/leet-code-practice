/*

Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

Note:

The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
A subtree of root is a tree consisting of root and all of its descendants.

*/

// solution

var averageOfSubtree = function (root) {
    let count = 0;

    const traverse = (node) => {
        if (node === null) {
            return [0, 0];
        }

        const [leftSum, leftCount] = traverse(node.left);
        const [rightSum, rightCount] = traverse(node.right);

        const subtreeSum = leftSum + rightSum + node.val;
        const subtreeCount = leftCount + rightCount + 1;

        if (Math.floor(subtreeSum / subtreeCount) === node.val) {
            count++;
        }

        return [subtreeSum, subtreeCount];
    };

    traverse(root);

    return count;
};
