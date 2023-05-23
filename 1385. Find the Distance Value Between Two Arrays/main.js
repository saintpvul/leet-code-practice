/*

Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

*/

// solution

// using treeNode

var findTheDistanceValue = function (arr1, arr2, d) {
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    const insertNode = (root, val) => {
        if (root === null) return new TreeNode(val);

        if (val < root.val) {
            root.left = insertNode(root.left, val);
        } else {
            root.right = insertNode(root.right, val);
        }

        return root;
    };

    const findMin = (root, target) => {
        let min = Infinity;

        while (root !== null) {
            if (root.val >= target) {
                min = Math.min(min, root.val);
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return min;
    };

    let distance = 0;
    let bst = null;

    for (let i = 0; i < arr2.length; i++) {
        bst = insertNode(bst, arr2[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        const min = findMin(bst, arr1[i] - d);
        if (min === Infinity || min > arr1[i] + d) {
            distance++;
        }
    }
    return distance;
};
