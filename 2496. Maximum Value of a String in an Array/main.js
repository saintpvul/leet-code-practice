/*

The value of an alphanumeric string can be defined as:

The numeric representation of the string in base 10, if it comprises of digits only.
The length of the string, otherwise.
Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

 

*/

// solution

var maximumValue = function (strs) {
    let max = 0;
    for (let i = 0; i < strs.length; i++) {
        let currentMax = 0;
        if (/^\d+$/.test(strs[i])) {
            currentMax = parseInt(strs[i], 10);
        } else {
            currentMax = strs[i].length;
        }
        if (currentMax >= max) {
            max = currentMax;
        }
    }
    return max;
};
