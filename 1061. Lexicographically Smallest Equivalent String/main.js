/*

You are given two strings of the same length s1 and s2 and a string baseStr.

We say s1[i] and s2[i] are equivalent characters.

For example, if s1 = "abc" and s2 = "cde", then we have 'a' == 'c', 'b' == 'd', and 'c' == 'e'.
Equivalent characters follow the usual rules of any equivalence relation:

Reflexivity: 'a' == 'a'.
Symmetry: 'a' == 'b' implies 'b' == 'a'.
Transitivity: 'a' == 'b' and 'b' == 'c' implies 'a' == 'c'.
For example, given the equivalency information from s1 = "abc" and s2 = "cde", "acd" and "aab" are equivalent strings of baseStr = "eed", and "aab" is the lexicographically smallest equivalent string of baseStr.

Return the lexicographically smallest equivalent string of baseStr by using the equivalency information from s1 and s2.

*/

// solution

class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: 26 }, (_, idx) => idx);
    }

    find(x) {
        if (x !== this.parent[x]) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
}

function smallestEquivalentString(s1, s2, baseStr) {
    const parent = new UnionFind();

    for (let i = 0; i < s1.length; i++) {
        const a = s1.charCodeAt(i) - 97;
        const b = s2.charCodeAt(i) - 97;
        const parentA = parent.find(a);
        const parentB = parent.find(b);
        if (parentA < parentB) {
            parent.parent[parentB] = parentA;
        } else {
            parent.parent[parentA] = parentB;
        }
    }

    const res = [];
    for (const a of baseStr) {
        const b = String.fromCharCode(parent.find(a.charCodeAt(0) - 97) + 97);
        res.push(b);
    }
    return res.join("");
}
