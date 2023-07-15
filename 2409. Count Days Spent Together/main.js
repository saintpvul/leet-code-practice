/*

Alice and Bob are traveling to Rome for separate business meetings.

You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob. Alice will be in the city from the dates arriveAlice to leaveAlice (inclusive), while Bob will be in the city from the dates arriveBob to leaveBob (inclusive). Each will be a 5-character string in the format "MM-DD", corresponding to the month and day of the date.

Return the total number of days that Alice and Bob are in Rome together.

You can assume that all dates occur in the same calendar year, which is not a leap year. Note that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

*/

// solution

var countDaysTogether = function (
    arriveAlice,
    leaveAlice,
    arriveBob,
    leaveBob
) {
    const [aMonth, aDay] = arriveAlice.split("-");
    const [bMonth, bDay] = arriveBob.split("-");
    const [cMonth, cDay] = leaveAlice.split("-");
    const [dMonth, dDay] = leaveBob.split("-");
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const getA =
        days
            .slice(0, parseInt(aMonth) - 1)
            .reduce((acc, curr) => acc + curr, 0) + parseInt(aDay);
    const getB =
        days
            .slice(0, parseInt(bMonth) - 1)
            .reduce((acc, curr) => acc + curr, 0) + parseInt(bDay);
    const getC =
        days
            .slice(0, parseInt(cMonth) - 1)
            .reduce((acc, curr) => acc + curr, 0) + parseInt(cDay);
    const getD =
        days
            .slice(0, parseInt(dMonth) - 1)
            .reduce((acc, curr) => acc + curr, 0) + parseInt(dDay);
    const maxArrival = Math.max(getA, getB);
    const minDeparture = Math.min(getC, getD);
    return Math.max(minDeparture - maxArrival + 1, 0);
};
