/*

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

*/

// solution

var countMatches = function (items, ruleKey, ruleValue) {
    return items.filter((e) =>
        ruleKey === "type"
            ? e[0] === ruleValue
            : ruleKey === "color"
            ? e[1] === ruleValue
            : e[2] === ruleValue
    ).length;
};
