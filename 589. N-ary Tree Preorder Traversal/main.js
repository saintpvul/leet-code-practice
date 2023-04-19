/*

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

*/

// solution

var preorder = function (root) {
    let res = [];
    if (!root) return res;
    res.push(root.val);
    for (let child of root.children) {
        res = res.concat(preorder(child));
    }
    return res;
};
