/*

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/

// solution

var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    while (l < r) {
        let vol = Math.min(height[l], height[r]) * (r - l);
        if (max < vol) max = vol;
        if (height[l] < height[r]) {
            l++;
        } else if (height[l] > height[r]) {
            r--;
        } else {
            l++;
            r--;
        }
    }
    return max;
};
