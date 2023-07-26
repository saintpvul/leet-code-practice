/*

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

*/

// solution

var combinationSum = function (candidates, target) {
    const res = [];

    const backtrack = (start, currentCombi, currentSum) => {
        if (currentSum === target) {
            res.push([...currentCombi]);
            return;
        }

        if (currentSum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            currentCombi.push(candidates[i]);
            backtrack(i, currentCombi, currentSum + candidates[i]);
            currentCombi.pop();
        }
    };

    backtrack(0, [], 0);
    return res;
};
