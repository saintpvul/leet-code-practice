/*

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

// solution

var isSameTree = function (p, q) {
    let pVals = [];
    let qVals = [];

    const check = (node, arr) => {
        if (!node) {
            arr.push(null);
            return;
        }

        arr.push(node.val);
        check(node.left, arr);
        check(node.right, arr);
    };

    check(p, pVals);
    check(q, qVals);
    if (pVals.length !== qVals.length) return false;

    for (let i = 0; i < pVals.length; i++) {
        if (pVals[i] !== qVals[i]) return false;
    }
    return true;
};
