/*

There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

Return the maximum distance between two houses with different colors.

The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

*/

// solution

var maxDistance = function (colors) {
    let maxDist = -1;

    for (let i = 0; i < colors.length - 1; i++) {
        for (let j = i + 1; j < colors.length; j++) {
            if (colors[i] !== colors[j]) {
                maxDist = Math.max(maxDist, Math.abs(j - i));
            }
        }
    }

    return maxDist;
};
