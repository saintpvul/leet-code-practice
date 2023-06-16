/*

You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.

*/

// solution

const licenseKeyFormatting = function (S, K) {
    S = S.toUpperCase();
    let sb = "";
    let i = S.length - 1;
    let j = 0;

    while (i >= 0) {
        let c = S.charAt(i);
        if (c === "-") {
            i--;
            continue;
        }
        sb = c + sb;
        j++;
        if (j === K) {
            sb = "-" + sb;
            j = 0;
        }
        i--;
    }

    if (sb.length > 0 && sb.charAt(0) === "-") {
        sb = sb.substring(1);
    }

    return sb;
};
