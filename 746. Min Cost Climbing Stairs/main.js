/*

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

*/

// solution

var minCostClimbingStairs = function (cost) {
    let n = cost.length;

    let price = new Array(n);

    price[0] = cost[0];
    price[1] = cost[1];

    for (let i = 2; i < n; i++) {
        price[i] = cost[i] + Math.min(price[i - 1], price[i - 2]);
    }
    return Math.min(price[n - 1], price[n - 2]);
};
