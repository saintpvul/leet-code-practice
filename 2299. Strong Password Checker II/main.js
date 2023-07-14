/*

A password is said to be strong if it satisfies all the following criteria:

It has at least 8 characters.
It contains at least one lowercase letter.
It contains at least one uppercase letter.
It contains at least one digit.
It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
Given a string password, return true if it is a strong password. Otherwise, return false.

*/

// solution

var strongPasswordCheckerII = function (password) {
    if (password.length < 8) {
        return false;
    }

    const hasLowerCase = password.split("").some((c) => /[a-z]/.test(c));
    if (!hasLowerCase) {
        return false;
    }

    const hasUpperCase = password.split("").some((c) => /[A-Z]/.test(c));
    if (!hasUpperCase) {
        return false;
    }

    const hasDigit = password.split("").some((c) => /\d/.test(c));
    if (!hasDigit) {
        return false;
    }

    const hasSpecial = password
        .split("")
        .some((c) =>
            [
                "!",
                "@",
                "#",
                "$",
                "%",
                "^",
                "&",
                "*",
                "(",
                ")",
                "-",
                "+",
            ].includes(c)
        );
    if (!hasSpecial) {
        return false;
    }

    for (let i = 1; i < password.length; i++) {
        if (password[i] === password[i - 1]) {
            return false;
        }
    }

    return true;
};
