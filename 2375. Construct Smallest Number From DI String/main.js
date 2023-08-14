/*

You are given a 0-indexed string pattern of length n consisting of the characters 'I' meaning increasing and 'D' meaning decreasing.

A 0-indexed string num of length n + 1 is created using the following conditions:

num consists of the digits '1' to '9', where each digit is used at most once.
If pattern[i] == 'I', then num[i] < num[i + 1].
If pattern[i] == 'D', then num[i] > num[i + 1].
Return the lexicographically smallest possible string num that meets the conditions.

*/

// solution

var smallestNumber = function (pattern) {
    let res = null;
    const nums = Array.from({ length: 10 }, () => false);
    const table = [];

    const dfs = (u) => {
        if (res) return;

        if (u === pattern.length + 1) {
            res = table.join("");
            return;
        }

        for (let i = 1; i <= 9; i++) {
            if (!nums[i]) {
                if (
                    u &&
                    pattern[u - 1] === "I" &&
                    parseInt(table[table.length - 1]) >= i
                ) {
                    continue;
                }
                if (
                    u &&
                    pattern[u - 1] === "D" &&
                    parseInt(table[table.length - 1]) <= i
                ) {
                    continue;
                }
                nums[i] = true;
                table.push(i.toString());
                dfs(u + 1);
                nums[i] = false;
                table.pop();
            }
        }
    };
    dfs(0);
    return res;
};
