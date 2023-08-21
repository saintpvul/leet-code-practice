/*

You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,

If isLefti == 1, then childi is the left child of parenti.
If isLefti == 0, then childi is the right child of parenti.
Construct the binary tree described by descriptions and return its root.

The test cases will be generated such that the binary tree is valid.

*/

// solution

var createBinaryTree = function (descriptions) {
    const children = new Set();
    const valToNode = {};

    for (const [p, c, isLeft] of descriptions) {
        const parent = valToNode[p] || new TreeNode(p);
        const child = valToNode[c] || new TreeNode(c);
        valToNode[p] = parent;
        valToNode[c] = child;
        if (isLeft) {
            parent.left = child;
        } else {
            parent.right = child;
        }
        children.add(c);
    }

    const root = [...Object.keys(valToNode)].find(
        (node) => !children.has(parseInt(node))
    );
    return valToNode[root];
};
