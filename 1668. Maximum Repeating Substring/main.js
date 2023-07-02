/*

For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in sequence.

*/

// solution

var maxRepeating = function (sequence, word) {
    let k = 1;
    let maxK = 0;
    let concatenated = word;

    while (sequence.includes(concatenated)) {
        maxK = k;
        k++;
        concatenated += word;
    }

    return maxK;
};
