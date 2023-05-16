/*

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

*/

// solution

var createHelloWorld = function () {
    return () => "Hello World";
};
