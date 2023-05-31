/*

Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

*/

// solution

// var minDiffInBST = function (root) {
//     let values = [];
//     const getVals = (node, arr) => {
//         if (!node) return;

//         arr.push(node.val);
//         getVals(node.left, arr);
//         getVals(node.right, arr);
//     };
//     getVals(root, values);

//     values = values.sort((a, b) => a - b);

//     let minDist = Infinity;

//     for (let i = 0; i < values.length; i++) {
//         let currentDist = Math.abs(values[i] - values[i + 1]);
//         if (currentDist < minDist) {
//             minDist = currentDist;
//         }
//     }
//     return minDist;
// };

// optimized
var minDiffInBST = function (root) {
    let prev = null;
    let minDist = Infinity;

    const getVals = (node) => {
        if (!node) return;

        getVals(node.left);

        if (prev !== null) {
            minDist = Math.min(minDist, node.val - prev);
        }
        prev = node.val;

        getVals(node.right);
    };

    getVals(root);

    return minDist;
};
