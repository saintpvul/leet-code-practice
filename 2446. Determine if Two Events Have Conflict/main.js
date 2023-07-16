/*

You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

event1 = [startTime1, endTime1] and
event2 = [startTime2, endTime2].
Event times are valid 24 hours format in the form of HH:MM.

A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

Return true if there is a conflict between two events. Otherwise, return false.

*/

// solution

// var haveConflict = function (event1, event2) {
//     const [startTime1, endTime1] = event1;
//     const [startTime2, endTime2] = event2;

//     const timeToMinutes = (time) => {
//         const [hours, minutes] = time.split(":").map(Number);
//         return hours * 60 + minutes;
//     };

//     const start1 = timeToMinutes(startTime1);
//     const end1 = timeToMinutes(endTime1);
//     const start2 = timeToMinutes(startTime2);
//     const end2 = timeToMinutes(endTime2);

//     if (
//         (start1 >= start2 && start1 <= end2) ||
//         (start2 >= start1 && start2 <= end1) ||
//         (start1 <= start2 && end1 >= end2) ||
//         (start2 <= start1 && end2 >= end1)
//     ) {
//         return true;
//     }

//     return false;
// };

var haveConflict = function (event1, event2) {
    const [start1, end1] = event1;
    const [start2, end2] = event2;

    return (
        (start1 <= start2 && start2 <= end1) ||
        (start2 <= start1 && start1 <= end2)
    );
};
