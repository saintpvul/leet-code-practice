/*

Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

*/

// solution

var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj
            .filter((val) => Boolean(val))
            .map((val) => compactObject(val));
    } else if (typeof obj === "object" && obj !== null) {
        const res = {};
        for (const key in obj) {
            if (Boolean(obj[key])) {
                res[key] = compactObject(obj[key]);
            }
        }
        return res;
    } else {
        return obj;
    }
};
