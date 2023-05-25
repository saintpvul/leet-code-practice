/*

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

*/

// solution

var averageOfLevels = function (root) {
    const res = [];
    const queue = [root];
    let index = 0;

    while (index < queue.length) {
        const queueLength = queue.length - index;
        let levelSum = 0;

        for (let i = 0; i < queueLength; i++) {
            const currNode = queue[index + i];
            levelSum += currNode.val;

            if (currNode.left) {
                queue.push(currNode.left);
            }

            if (currNode.right) {
                queue.push(currNode.right);
            }
        }

        res.push(levelSum / queueLength);
        index += queueLength;
    }

    return res;
};
