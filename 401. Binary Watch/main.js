/*

A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

For example, the below binary watch reads "4:51".


Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.

For example, "01:00" is not valid. It should be "1:00".
The minute must be consist of two digits and may contain a leading zero.

For example, "10:2" is not valid. It should be "10:02".

*/

// solution

var readBinaryWatch = function (turnedOn) {
    const hours = [1, 2, 4, 8];
    const minutes = [...hours, 16, 32];
    const results = [];

    for (let hour = 0; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            const hourCount = hours.filter((h) => (hour & h) !== 0).length;
            const minuteCount = minutes.filter(
                (m) => (minute & m) !== 0
            ).length;
            if (hourCount + minuteCount === turnedOn) {
                results.push(`${hour}:${minute.toString().padStart(2, "0")}`);
            }
        }
    }

    return results;
};
