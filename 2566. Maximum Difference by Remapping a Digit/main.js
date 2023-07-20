/*

You are given an integer num. You know that Danny Mittal will sneakily remap one of the 10 possible digits (0 to 9) to another digit.

Return the difference between the maximum and minimum values Danny can make by remapping exactly one digit in num.

Notes:

When Danny remaps a digit d1 to another digit d2, Danny replaces all occurrences of d1 in num with d2.
Danny can remap a digit to itself, in which case num does not change.
Danny can remap different digits for obtaining minimum and maximum values respectively.
The resulting number after remapping can contain leading zeroes.
We mentioned "Danny Mittal" to congratulate him on being in the top 10 in Weekly Contest 326.

*/

// solution

function minMaxDifference(num) {
    const s = num.toString();
    const to9 = s[firstNotNineIndex(s)];
    const to0 = s[0];
    return (
        parseInt(s.replace(new RegExp(to9, "g"), "9")) -
        parseInt(s.replace(new RegExp(to0, "g"), "0"))
    );
}

function firstNotNineIndex(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "9") {
            return i;
        }
    }
    return 0;
}
