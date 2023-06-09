/*

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

*/

// solution

var expect = function (val) {
    return {
        toBe: function (exp) {
            if (val !== exp) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        notToBe: function (unexp) {
            if (val === unexp) {
                throw new Error("Equal");
            } else {
                return true;
            }
        },
    };
};
