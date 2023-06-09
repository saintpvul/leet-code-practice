/*

Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

*/

// solution

var isEmpty = function (obj) {
    return Array.isArray(obj)
        ? !obj.length
        : typeof obj === "object" && obj !== null
        ? !Object.keys(obj).length
        : true;
};
