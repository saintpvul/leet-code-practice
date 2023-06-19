/*

Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

*/

// solution

// var findSecondMinimumValue = function (root) {
//     let vals = new Set();

//     const traverse = (node) => {
//         if (node === null) return;

//         if (!node.left && !node.right && !vals.has(node.val)) {
//             vals.add(node.val);
//         }

//         traverse(node.left);
//         traverse(node.right);
//     };
//     traverse(root);
//     console.log(vals);
//     return Array.from(vals).sort((a, b) => a - b)[1] || -1;
// };

//

var findSecondMinimumValue = function (root) {
    let min = root.val;
    let secondMin = Infinity;

    const traverse = (node) => {
        if (node === null) return;

        if (node.val > min && node.val < secondMin) {
            secondMin = node.val;
        }

        traverse(node.left);
        traverse(node.right);
    };

    traverse(root);

    return secondMin !== Infinity ? secondMin : -1;
};
