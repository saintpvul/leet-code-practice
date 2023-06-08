/*

There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

*/

// solution

var numWaterBottles = function (numBottles, numExchange) {
    let drink = numBottles;
    let bottles = numBottles;

    while (bottles >= 1) {
        bottles = bottles / numExchange;
        drink += bottles;
    }
    return Math.floor(drink);
};