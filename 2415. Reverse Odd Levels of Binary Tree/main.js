/*

Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.

For example, suppose the node values at level 3 are [2,1,3,4,7,11,29,18], then it should become [18,29,11,7,4,3,1,2].
Return the root of the reversed tree.

A binary tree is perfect if all parent nodes have two children and all leaves are on the same level.

The level of a node is the number of edges along the path between it and the root node.

*/

// solution

var reverseOddLevels = function (root) {
    const q = [root];
    let depth = 0;

    while (q.length !== 0) {
        const nodes = [];

        const prevDepthCount = q.length;
        for (let i = 0; i < prevDepthCount; i++) {
            const n = q.shift();

            if (depth % 2 === 1) {
                nodes.push(n);
            }

            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }

        const nodesCount = nodes.length;
        for (let i = 0; i < nodesCount >> 1; i++) {
            [nodes[i].val, nodes[nodesCount - 1 - i].val] = [
                nodes[nodesCount - 1 - i].val,
                nodes[i].val,
            ];
        }

        depth++;
    }

    return root;
};
