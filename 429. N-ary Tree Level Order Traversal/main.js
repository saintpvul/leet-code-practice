/*

Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

*/

// solution

var levelOrder = function (root) {
    if (!root) return [];

    const res = [];
    const que = [root];

    while (que.length > 0) {
        const lvl = [];
        const lvlSize = que.length;

        for (let i = 0; i < lvlSize; i++) {
            const node = que.shift();
            lvl.push(node.val);

            for (const child of node.children) {
                que.push(child);
            }
        }
        res.push(lvl);
    }

    return res;
};
