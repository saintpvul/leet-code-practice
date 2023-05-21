/*

Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

*/

// solution

var distributeCandies = function (candyType) {
    const candies = new Map();

    for (let i = 0; i < candyType.length; i++) {
        const type = candyType[i];
        candies.set(type, (candies.get(type) || 0) + 1);
    }
    const canEat = Math.floor(candyType.length / 2);
    return Math.min(candies.size, canEat);
};
