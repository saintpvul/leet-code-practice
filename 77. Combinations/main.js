/*

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

*/

// solution

var combine = function (n, k) {
    const res = [];

    function backtrack(start, currCombi) {
        if (currCombi.length === k) {
            res.push([...currCombi]);
            return;
        }

        for (let i = start; i <= n; i++) {
            currCombi.push(i);
            backtrack(i + 1, currCombi);
            currCombi.pop();
        }
    }

    backtrack(1, []);
    return res;
};
