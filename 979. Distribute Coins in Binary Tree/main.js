/*

You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. There are n coins in total throughout the whole tree.

In one move, we may choose two adjacent nodes and move one coin from one node to another. A move may be from parent to child, or from child to parent.

Return the minimum number of moves required to make every node have exactly one coin.

*/

// solution

var distributeCoins = function (root) {
    let moves = 0;

    const dfs = (node) => {
        if (!node) {
            return 0;
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        const coins = node.val + left + right - 1;

        moves += Math.abs(coins);

        return coins;
    };

    dfs(root);
    return moves;
};
