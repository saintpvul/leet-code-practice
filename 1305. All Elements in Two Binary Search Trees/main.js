/*

Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

*/

// solution

var getAllElements = function (root1, root2) {
    let elements = [];

    const traverse = (node) => {
        if (node === null) return;

        elements.push(node.val);
        traverse(node.left);
        traverse(node.right);
    };

    traverse(root1);
    traverse(root2);

    elements.sort((a, b) => a - b);
    return elements;
};
