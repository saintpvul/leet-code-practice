/*

You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].

The following are the types of poker hands you can make from best to worst:

"Flush": Five cards of the same suit.
"Three of a Kind": Three cards of the same rank.
"Pair": Two cards of the same rank.
"High Card": Any single card.
Return a string representing the best type of poker hand you can make with the given cards.

Note that the return values are case-sensitive.

*/

// solution

var bestHand = function (ranks, suits) {
    if (suits.every((v) => v === suits[0])) {
        return "Flush";
    }
    const count = new Array(14).fill(0);
    let isPair = false;
    for (const v of ranks) {
        if (++count[v] === 3) {
            return "Three of a Kind";
        }
        isPair = isPair || count[v] === 2;
    }
    if (isPair) {
        return "Pair";
    }
    return "High Card";
};
