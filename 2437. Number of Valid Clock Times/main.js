/*

You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible time is "23:59".

In the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9.

Return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9.

*/

// solution

var countTime = function (time) {
    let choices = 1;

    if (time[0] === "?") {
        choices = time[1] === "?" ? 24 : Number(time[1]) < 4 ? 3 : 2;
    } else if (time[1] === "?") {
        choices = time[0] === "2" ? 4 : 10;
    }

    if (time[3] === "?") choices *= 6;
    if (time[4] === "?") choices *= 10;

    return choices;
};
