/*

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

*/

// solution

var getTargetCopy = function (original, cloned, target) {
    let stack = [original];
    let cloneStack = [cloned];
    while (stack.length > 0) {
        let node = stack.pop();
        let clonedNode = cloneStack.pop();
        if (node === target) {
            return clonedNode;
        }
        if (node.left) {
            stack.push(node.left);
            cloneStack.push(clonedNode.left);
        }
        if (node.right) {
            stack.push(node.right);
            cloneStack.push(clonedNode.right);
        }
    }
    return null;
};
