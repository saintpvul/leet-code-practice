/*

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

*/

// solution

var halvesAreAlike = function (s) {
    const half = s.length / 2;
    const first = s.slice(0, half);
    const second = s.slice(half);

    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    let counter = [0, 0];

    for (let i = 0; i < first.length; i++) {
        const char = first[i];
        if (vowels.includes(char)) {
            counter[0]++;
        }
    }

    for (let i = 0; i < second.length; i++) {
        const char = second[i];
        if (vowels.includes(char)) {
            counter[1]++;
        }
    }
    return counter[0] === counter[1];
};
