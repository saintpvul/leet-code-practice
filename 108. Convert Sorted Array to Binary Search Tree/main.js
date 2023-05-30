/*

Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.

*/

// solution

var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;

    const mid = Math.floor(nums.length / 2);

    const root = new TreeNode(nums[mid]);

    const left = nums.slice(0, mid);
    const right = nums.slice(mid + 1);

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);

    return root;
};
