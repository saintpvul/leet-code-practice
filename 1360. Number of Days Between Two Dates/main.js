/*

Write a program to count the number of days between two dates.

The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

*/

// solution

var daysBetweenDates = function (date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;

    const timestamp1 = new Date(date1).getTime();
    const timestamp2 = new Date(date2).getTime();

    const diffInMilliseconds = Math.abs(timestamp2 - timestamp1);
    const diffInDays = Math.floor(diffInMilliseconds / oneDay);

    return diffInDays;
};
