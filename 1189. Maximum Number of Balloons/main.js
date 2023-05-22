/*

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

*/

// solution

var maxNumberOfBalloons = function (text) {
    const balloon = ["b", "a", "l", "o", "n"];
    const countBalloons = new Map(balloon.map((key) => [key, 0]));

    for (const char of text) {
        if (countBalloons.has(char)) {
            countBalloons.set(char, countBalloons.get(char) + 1);
        }
    }

    let maxInstances = Infinity;
    for (const [key, count] of countBalloons.entries()) {
        if (key === "l" || key === "o") {
            maxInstances = Math.min(maxInstances, Math.floor(count / 2));
        } else {
            maxInstances = Math.min(maxInstances, count);
        }
    }

    return maxInstances;
};
