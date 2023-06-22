/*

You are given an integer array deck where deck[i] represents the number written on the ith card.

Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.

*/

// solution

var hasGroupsSizeX = function (deck) {
    let countMap = new Map();

    for (let card of deck) {
        countMap.set(card, (countMap.get(card) || 0) + 1);
    }

    const counts = Array.from(countMap.values());

    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };

    let gcdValue = counts[0];
    for (let i = 1; i < counts.length; i++) {
        gcdValue = gcd(gcdValue, counts[i]);
    }

    return gcdValue >= 2;
};
