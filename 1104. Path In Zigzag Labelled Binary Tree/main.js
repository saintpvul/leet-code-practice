/*

In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.



Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.

*/

// solution

var pathInZigZagTree = function (label) {
    let path = [];

    while (label > 0) {
        path.push(label);
        label = Math.floor(label / 2);

        let depth = 0;
        let curr = label;
        while (curr > 0) {
            curr >>= 1;
            depth++;
        }

        if (label > 0) {
            const maxLabel = (1 << depth) - 1;
            label = maxLabel - (label - (1 << (depth - 1)));
        }
    }

    return path.reverse();
};
