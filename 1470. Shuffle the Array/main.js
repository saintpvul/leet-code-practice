/*

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

*/

// solution

var shuffle = function (nums, n) {
    let res = [];
    for (let x = 0, y = n; x < n; x++, y++) {
        res.push(nums[x], nums[y]);
    }
    return res;
};
