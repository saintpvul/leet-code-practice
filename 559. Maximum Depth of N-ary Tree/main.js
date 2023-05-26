/*

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

*/

// solution

var maxDepth = function (root) {
    if (!root) return 0;

    let max = 0;

    for (const child of root.children) {
        const depth = maxDepth(child);
        max = Math.max(max, depth);
    }

    return max + 1;
};
