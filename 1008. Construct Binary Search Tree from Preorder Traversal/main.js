/*

Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.

It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.

A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.

A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

*/

// solution

var bstFromPreorder = function(preorder) {
    let idx = 0

    const bstConstructor = (min, max) => {
        if(idx >= preorder.length || preorder[idx] < min || preorder[idx] > max){
            return null
        }

        const node = new TreeNode(preorder[idx])
        idx++
        node.left = bstConstructor(min, node.val)
        node.right = bstConstructor(node.val, max)

        return node
    }

    return bstConstructor (-Infinity, Infinity)
};