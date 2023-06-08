/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

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
