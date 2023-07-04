/*

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

*/

// solution

var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) {
        return true;
    }

    if (s1.length !== s2.length) {
        return false;
    }

    let firstIndex = -1;
    let secondIndex = -1;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (firstIndex === -1) {
                firstIndex = i;
            } else if (secondIndex === -1) {
                secondIndex = i;
            } else {
                return false;
            }
        }
    }

    if (firstIndex !== -1 && secondIndex !== -1) {
        let s1Array = s1.split("");
        let s2Array = s2.split("");

        let temp = s1Array[firstIndex];
        s1Array[firstIndex] = s1Array[secondIndex];
        s1Array[secondIndex] = temp;

        return s1Array.join("") === s2Array.join("");
    }

    return false;
};
