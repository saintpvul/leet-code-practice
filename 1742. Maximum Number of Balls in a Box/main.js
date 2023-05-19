/*

You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.

Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.

Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.



*/

// solution

//  var countBalls = function (lowLimit, highLimit) {
//      let box = new Map();

//      for (let i = lowLimit; i <= highLimit; i++) {
//          let ball = String(i)
//              .split("")
//              .reduce((sum, digit) => sum + Number(digit), 0);

//          if (box.has(ball)) {
//              box.set(ball, box.get(ball) + 1);
//          } else {
//              box.set(ball, 1);
//          }
//      }

//      let maxBalls = 0;
//      for (let count of box.values()) {
//          maxBalls = Math.max(maxBalls, count);
//      }

//      return maxBalls;
//  };

var countBalls = function (lowLimit, highLimit) {
    let box = new Map();
    let maxBalls = 0;

    for (let i = lowLimit; i <= highLimit; i++) {
        let digitSum = 0;
        let num = i;

        while (num > 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }

        if (box.has(digitSum)) {
            box.set(digitSum, box.get(digitSum) + 1);
        } else {
            box.set(digitSum, 1);
        }

        maxBalls = Math.max(maxBalls, box.get(digitSum));
    }

    return maxBalls;
};
