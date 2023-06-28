/*

You are given a 0-indexed 2D integer array brackets where brackets[i] = [upperi, percenti] means that the ith tax bracket has an upper bound of upperi and is taxed at a rate of percenti. The brackets are sorted by upper bound (i.e. upperi-1 < upperi for 0 < i < brackets.length).

Tax is calculated as follows:

The first upper0 dollars earned are taxed at a rate of percent0.
The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
And so on.
You are given an integer income representing the amount of money you earned. Return the amount of money that you have to pay in taxes. Answers within 10-5 of the actual answer will be accepted.

*/

// solution

var calculateTax = function (brackets, income) {
    let tax = 0;
    let previousUpperBound = 0;
    for (let i = 0; i < brackets.length; i++) {
        const [upperBound, percent] = brackets[i];
        const taxableAmount = Math.min(income, upperBound) - previousUpperBound;
        const taxAmount = (taxableAmount * percent) / 100;
        tax += taxAmount;

        if (income <= upperBound) {
            break;
        }

        previousUpperBound = upperBound;
    }

    return tax;
};
