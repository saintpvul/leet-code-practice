/*

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

*/

// solution

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (n === 1) return n;
        let min = 0,
            max = n,
            bad;
        while (min <= max) {
            let mid = Math.floor((min + max) / 2);
            if (isBadVersion(mid)) {
                bad = mid;
                max = mid - 1;
            } else {
                min = mid + 1;
            }
        }
        return bad;
    };
};
