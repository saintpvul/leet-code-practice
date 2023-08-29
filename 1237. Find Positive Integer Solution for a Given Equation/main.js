/*

Given a callable function f(x, y) with a hidden formula and a value z, reverse engineer the formula and return all positive integer pairs x and y where f(x,y) == z. You may return the pairs in any order.

While the exact formula is hidden, the function is monotonically increasing, i.e.:

f(x, y) < f(x + 1, y)
f(x, y) < f(x, y + 1)
The function interface is defined like this:

interface CustomFunction {
public:
  // Returns some positive integer f(x, y) for two positive integers x and y based on a formula.
  int f(int x, int y);
};
We will judge your solution as follows:

The judge has a list of 9 hidden implementations of CustomFunction, along with a way to generate an answer key of all valid pairs for a specific z.
The judge will receive two inputs: a function_id (to determine which implementation to test your code with), and the target z.
The judge will call your findSolution and compare your results with the answer key.
If your results match the answer key, your solution will be Accepted.

*/

// solution

var lcaDeepestLeaves = function (root) {
    const findDepth = (node) => {
        if (node === null) {
            return 0;
        }
        return 1 + Math.max(findDepth(node.left), findDepth(node.right));
    };

    const findLCA = (node, depth) => {
        if (node === null) {
            return null;
        }
        if (depth === 0) {
            return node;
        }

        const leftLCA = findLCA(node.left, depth - 1);
        const rightLCA = findLCA(node.right, depth - 1);

        if (leftLCA !== null && rightLCA !== null) {
            return node;
        } else if (leftLCA !== null) {
            return leftLCA;
        } else {
            return rightLCA;
        }
    };

    const maxDepth = findDepth(root);
    return findLCA(root, maxDepth - 1);
};
