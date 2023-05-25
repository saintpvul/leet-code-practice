/*

Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

*/

// solution

var postorder = function (root) {
    if (!root) {
        return [];
    }
    const res = [];

    function traverse(node) {
        for (const child of node.children) {
            traverse(child);
        }
        res.push(node.val);
    }

    traverse(root);

    return res;
};
