/*

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

*/

// solution

var combinationSum2 = function (candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);

    const backtrack = (start, currentCombi, currentSum) => {
        if (currentSum === target) {
            res.push([...currentCombi]);
            return;
        }

        if (currentSum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            currentCombi.push(candidates[i]);
            backtrack(i + 1, currentCombi, currentSum + candidates[i]);
            currentCombi.pop();
        }
    };

    backtrack(0, [], 0);
    return res;
};
