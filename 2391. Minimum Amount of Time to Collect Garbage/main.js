/*

You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.

You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.

There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.

Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.

Return the minimum number of minutes needed to pick up all the garbage.

*/

// solution


 var garbageCollection = function(garbage, travel) {
    const n = garbage.length;
    const pTravel = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        pTravel[i] = pTravel[i - 1] + travel[i - 1];
    }
    let m = 0, p = 0, g = 0;
    let mLast = 0, pLast = 0, gLast = 0;
    
    for (let i = 0; i < garbage.length; i++) {
        const str = garbage[i];
        for (let j = 0; j < str.length; j++) {
            if (str.charAt(j) === 'M') {
                m++;
                mLast = i;
            }
            if (str.charAt(j) === 'G') {
                g++;
                gLast = i;
            }
            if (str.charAt(j) === 'P') {
                p++;
                pLast = i;
            }
        }
    }
    
    return pTravel[pLast] + pTravel[mLast] + pTravel[gLast] + m + p + g;
}