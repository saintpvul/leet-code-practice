/*

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

*/

// solution

var isAlienSorted = function (words, order) {
    const charMap = new Map();

    const isSorted = (word1, word2, charMap) => {
        const l1 = word1.length;
        const l2 = word2.length;
        const minL = Math.min(l1, l2);

        for (let i = 0; i < minL; i++) {
            const char1 = word1.charAt(i);
            const char2 = word2.charAt(i);
            if (charMap.get(char1) < charMap.get(char2)) {
                return true;
            } else if (charMap.get(char1) > charMap.get(char2)) {
                return false;
            }
        }

        return l1 <= l2;
    };

    for (let i = 0; i < order.length; i++) {
        charMap.set(order[i], i);
    }

    for (let i = 1; i < words.length; i++) {
        if (!isSorted(words[i - 1], words[i], charMap)) {
            return false;
        }
    }

    return true;
};
