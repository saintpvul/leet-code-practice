/*

You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti].

For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).

Return an array answer where answer[i] is the answer to the ith query.

*/

// solution

var xorQueries = function (arr, queries) {
    const res = [];
    for (let query of queries) {
        const [l, r] = query;
        let xor = arr[l];
        for (let i = l + 1; i <= r; i++) {
            xor ^= arr[i];
        }
        res.push(xor);
    }
    return res;
};
