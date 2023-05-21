/*

A substring is a contiguous (non-empty) sequence of characters within a string.

A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

Given a string word, return the number of vowel substrings in word.

*/

// solution

var countVowelSubstrings = function (word) {
    const isVowel = (char) => ["a", "e", "i", "o", "u"].includes(char);
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let vowels = new Set();

        for (let j = i; j < word.length; j++) {
            const char = word[j];

            if (isVowel(char)) {
                vowels.add(char);
                if (vowels.size >= 5) {
                    count++;
                }
            } else {
                break;
            }
        }
    }
    return count;
};
