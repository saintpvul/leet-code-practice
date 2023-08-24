/*

You are given an array of strings of the same length words.

In one move, you can swap any two even indexed characters or any two odd indexed characters of a string words[i].

Two strings words[i] and words[j] are special-equivalent if after any number of moves, words[i] == words[j].

For example, words[i] = "zzxy" and words[j] = "xyzz" are special-equivalent because we may make the moves "zzxy" -> "xzzy" -> "xyzz".
A group of special-equivalent strings from words is a non-empty subset of words such that:

Every pair of strings in the group are special equivalent, and
The group is the largest size possible (i.e., there is not a string words[i] not in the group such that words[i] is special-equivalent to every string in the group).
Return the number of groups of special-equivalent strings from words.

*/

// solution

var numSpecialEquivGroups = function (words) {
    const isSimilar = (s) => {
        const even = Array(26).fill(0);
        const odd = Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            const char = s.charCodeAt(i) - 97;
            (i % 2 === 0 ? even : odd)[char]++;
        }
        return [even, odd];
    };

    const uniq = new Set();

    for (const word of words) {
        const currentWord = isSimilar(word).join(",");
        uniq.add(currentWord);
    }

    return uniq.size;
};
