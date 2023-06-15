/*

459. Repeated Substring Pattern


*/

// solution

var repeatedSubstringPattern = function (s) {
    return (s + s).slice(1, -1).includes(s);
};
