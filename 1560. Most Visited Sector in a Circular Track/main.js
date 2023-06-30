/*

Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

Return an array of the most visited sectors sorted in ascending order.

Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).

*/

// solution

var mostVisited = function (n, rounds) {
    const frequency = new Array(n + 1).fill(0);

    const m = rounds.length;
    frequency[rounds[0]]++;

    for (let i = 1; i < m; i++) {
        const start = rounds[i - 1];
        const end = rounds[i];

        if (start <= end) {
            for (let j = start + 1; j <= end; j++) {
                frequency[j]++;
            }
        } else {
            for (let j = start + 1; j <= n; j++) {
                frequency[j]++;
            }
            for (let j = 1; j <= end; j++) {
                frequency[j]++;
            }
        }
    }

    const maxFrequency = Math.max(...frequency);
    const mostVisited = [];

    for (let i = 1; i <= n; i++) {
        if (frequency[i] === maxFrequency) {
            mostVisited.push(i);
        }
    }

    return mostVisited;
};
