/*


Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

*/

// solution

var binaryTreePaths = function (root) {
    const paths = [];

    const dfs = (node, path) => {
        if (node === null) {
            return;
        }

        path.push(node.val);

        if (node.left === null && node.right === null) {
            paths.push(path.join("->"));
        } else {
            dfs(node.left, path);
            dfs(node.right, path);
        }

        path.pop();
    };

    dfs(root, []);

    return paths;
};
