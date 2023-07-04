/*

You are given a string time in the form of  hh:mm, where some of the digits in the string are hidden (represented by ?).

The valid times are those inclusively between 00:00 and 23:59.

Return the latest valid time you can get from time by replacing the hidden digits. 

*/

// solution

var maximumTime = function (time) {
    let res = "";

    for (let i = 0; i < time.length; i++) {
        if (time[i] === "?") {
            if (i === 0) {
                if (time[1] === "?" || time[1] < "4") {
                    res += "2";
                } else {
                    res += "1";
                }
            } else if (i === 1) {
                if (res[0] === "2") {
                    res += "3";
                } else {
                    res += "9";
                }
            } else if (i === 3) {
                res += "5";
            } else if (i === 4) {
                res += "9";
            }
        } else {
            res += time[i];
        }
    }

    return res;
};
