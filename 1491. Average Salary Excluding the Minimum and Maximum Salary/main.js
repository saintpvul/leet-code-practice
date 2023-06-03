/*

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

*/

// solution

var average = function (salary) {
    let max = -Infinity;
    let min = Infinity;
    let result = 0;
    for (let i = 0; i < salary.length; i++) {
        max = Math.max(salary[i], max);
        min = Math.min(salary[i], min);
        result += salary[i];
    }
    return (result - (min + max)) / (salary.length - 2);
};
