/*

Given a string licensePlate and an array of strings words, find the shortest completing word in words.

A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

*/

// solution

var shortestCompletingWord = function (licensePlate, words) {
    const counter = new Map();
    const sanitizedLicensePlate = licensePlate
        .toLowerCase()
        .replace(/[^a-z]/g, "");

    for (let i = 0; i < sanitizedLicensePlate.length; i++) {
        const letter = sanitizedLicensePlate[i];
        counter.set(letter, (counter.get(letter) || 0) + 1);
    }

    let shortest = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
        const wordCounter = new Map(counter);

        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            if (wordCounter.has(letter)) {
                wordCounter.set(letter, wordCounter.get(letter) - 1);
                if (wordCounter.get(letter) === 0) {
                    wordCounter.delete(letter);
                }
            }
        }

        if (
            wordCounter.size === 0 &&
            (shortest === "" || word.length < shortest.length)
        ) {
            shortest = words[i];
        }
    }

    return shortest;
};
