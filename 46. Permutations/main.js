/*

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

*/

// solution

var permute = function (nums) {
    let permutations = [];

    const backtrack = (currentPermutation, remainingNums) => {
        if (currentPermutation.length === nums.length) {
            permutations.push([...currentPermutation]);
            return;
        }

        for (let i = 0; i < remainingNums.length; i++) {
            const num = remainingNums[i];
            currentPermutation.push(num);
            const newRemaining = remainingNums.filter(
                (_, index) => index !== i
            );
            backtrack(currentPermutation, newRemaining);
            currentPermutation.pop();
        }
    };

    backtrack([], nums);
    return permutations;
};
