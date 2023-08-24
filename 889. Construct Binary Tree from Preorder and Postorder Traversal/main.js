/*

Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.

If there exist multiple answers, you can return any of them.

*/

// solution

var constructFromPrePost = function (preorder, postorder) {
    const postToIndex = {};
    for (let i = 0; i < postorder.length; i++) {
        postToIndex[postorder[i]] = i;
    }

    const buildTree = (preStart, preEnd, postStart, postEnd) => {
        if (preStart > preEnd) {
            return null;
        }
        if (preStart === preEnd) {
            return new TreeNode(preorder[preStart]);
        }

        const rootVal = preorder[preStart];
        const leftRootVal = preorder[preStart + 1];
        const leftRootPostIndex = postToIndex[leftRootVal];
        const leftSize = leftRootPostIndex - postStart + 1;

        const root = new TreeNode(rootVal);
        root.left = buildTree(
            preStart + 1,
            preStart + leftSize,
            postStart,
            leftRootPostIndex
        );
        root.right = buildTree(
            preStart + leftSize + 1,
            preEnd,
            leftRootPostIndex + 1,
            postEnd - 1
        );
        return root;
    };

    return buildTree(0, preorder.length - 1, 0, postorder.length - 1);
};
