/*

You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.
Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.

*/

// solution

var findMatrix = function(nums) {
    let newArr = []
    while(nums.reduce((s,v) => s + v, 0) > 0) { 
    const currentVals = new Set()
    for(let i = 0; i < nums.length; i++) {
        if(currentVals.has(nums[i]) || nums[i] === 0){
            continue
        } else {
            currentVals.add(nums[i])
            nums[i] = 0
        }
    }
    newArr.push(Array.from(currentVals))
    }
    return newArr
};