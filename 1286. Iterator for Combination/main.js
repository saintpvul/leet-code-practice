/*

Design the CombinationIterator class:

CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
next() Returns the next combination of length combinationLength in lexicographical order.
hasNext() Returns true if and only if there exists a next combination.

*/

// solution

class CombinationIterator {
    constructor(characters, combinationLength) {
        this.combinations = [];
        this.generateCombinations(characters, combinationLength, 0, "");
        this.currentIndex = 0;
    }

    generateCombinations(characters, length, startIndex, currentCombination) {
        if (length === 0) {
            this.combinations.push(currentCombination);
            return;
        }

        for (let i = startIndex; i <= characters.length - length; i++) {
            this.generateCombinations(
                characters,
                length - 1,
                i + 1,
                currentCombination + characters[i]
            );
        }
    }

    next() {
        const result = this.combinations[this.currentIndex];
        this.currentIndex++;
        return result;
    }

    hasNext() {
        return this.currentIndex < this.combinations.length;
    }
}
