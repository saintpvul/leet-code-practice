/*

You are given two strings current and correct representing two 24-hour times.

24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

Return the minimum number of operations needed to convert current to correct.

*/

// solution

var convertTime = function (current, correct) {
    const getTimeInMinutes = (time) => {
        const [hour, min] = time.split(":");
        const hoursInMin = hour[0] === "0" ? +hour[1] * 60 : +hour * 60;
        const timeInMins = hoursInMin + +min;
        return timeInMins;
    };

    let diff = Math.abs(getTimeInMinutes(current) - getTimeInMinutes(correct));

    let count = 0;

    while (diff > 0) {
        if (diff >= 60) {
            count += 1;
            diff -= 60;
        } else if (diff >= 15) {
            count += 1;
            diff -= 15;
        } else if (diff >= 5) {
            count += 1;
            diff -= 5;
        } else {
            count += 1;
            diff -= 1;
        }
    }
    return count;
};
