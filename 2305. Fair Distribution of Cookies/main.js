/*

You are given an integer array cookies, where cookies[i] denotes the number of cookies in the ith bag. You are also given an integer k that denotes the number of children to distribute all the bags of cookies to. All the cookies in the same bag must go to the same child and cannot be split up.

The unfairness of a distribution is defined as the maximum total cookies obtained by a single child in the distribution.

Return the minimum unfairness of all distributions.

*/

// solution

var distributeCookies = function (cookies, k) {
    let res = Infinity;
    let count = new Array(k).fill(0);

    const dfs = (i) => {
        if (i >= cookies.length) {
            res = Math.max(...count);
            return;
        }
        for (let j = 0; j < k; j++) {
            if (
                count[j] + cookies[i] >= res ||
                (j && count[j] === count[j - 1])
            ) {
                continue;
            }
            count[j] += cookies[i];
            dfs(i + 1);
            count[j] -= cookies[i];
        }
    };

    count.sort((a, b) => b - a);
    dfs(0);
    return res;
};
