/*

Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

*/

// solution

var subsets = function (nums) {
    const res = [[]];
    let curr = [];
    for (const num of nums) {
        curr = [];
        for (const subset of res) {
            curr.push([...subset, num]);
        }
        res.push(...curr);
    }

    return res;
};
