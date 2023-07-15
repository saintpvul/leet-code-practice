/*

There are n employees, each with a unique id from 0 to n - 1.

You are given a 2D integer array logs where logs[i] = [idi, leaveTimei] where:

idi is the id of the employee that worked on the ith task, and
leaveTimei is the time at which the employee finished the ith task. All the values leaveTimei are unique.
Note that the ith task starts the moment right after the (i - 1)th task ends, and the 0th task starts at time 0.

Return the id of the employee that worked the task with the longest time. If there is a tie between two or more employees, return the smallest id among them.

*/

// solution

var hardestWorker = function (n, logs) {
    let [employee, max] = [-1, 0];
    let currentTime = 0;
    for (let i = 0; i < logs.length; i++) {
        const [currentEmployee, time] = logs[i];
        const timeUnits = Math.abs(currentTime - time);
        if (
            max < timeUnits ||
            (max === timeUnits && currentEmployee < employee)
        ) {
            employee = currentEmployee;
            max = timeUnits;
        }
        currentTime = time;
    }
    return employee;
};
