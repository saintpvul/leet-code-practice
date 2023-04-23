/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

*/

// solution

var climbStairs = function (n) {
    let fb = [1, 1];
    for (let i = 2; i <= n; i++) {
        fb[i] = fb[i - 1] + fb[i - 2];
    }
    return fb[n];
};
