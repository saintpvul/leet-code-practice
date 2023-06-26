/*

Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

*/

// solution

var dayOfYear = function (date) {
    const currDate = new Date(date);
    const startOfYear = new Date(currDate.getFullYear(), 0, 0);
    const diff = currDate - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    return dayOfYear;
};
