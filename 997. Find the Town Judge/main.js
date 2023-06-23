/*

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

*/

// solution

var findJudge = function (n, trust) {
    let trustingCounts = new Map();
    let trustedByCounts = new Map();

    for (let [truster, trustee] of trust) {
        trustingCounts.set(truster, (trustingCounts.get(truster) || 0) + 1);
        trustedByCounts.set(trustee, (trustedByCounts.get(trustee) || 0) + 1);
    }

    for (let i = 1; i <= n; i++) {
        if (
            (trustingCounts.get(i) || 0) === 0 &&
            (trustedByCounts.get(i) || 0) === n - 1
        ) {
            return i;
        }
    }

    return -1;
};
