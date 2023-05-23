/*

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

*/

// solution

// var guessNumber = function (n) {
//     let currentGuess = n;
//     let min = 1;
//     let max = n;
//     while (min <= max) {
//         currentGuess = Math.floor(min + (max - min) / 2);
//         if (guess(currentGuess) === 0) {
//             return currentGuess;
//         }
//         if (guess(currentGuess) < 0) {
//             max = currentGuess - 1;
//         } else {
//             min = currentGuess + 1;
//         }
//     }
// };
// optimized

var guessNumber = function (n) {
    let min = 1;
    let max = n;
    while (min <= max) {
        let pivot = Math.floor(min + (max - min) / 2);
        let current = guess(pivot);
        if (current === 0) {
            return pivot;
        }
        if (current < 0) {
            max = pivot - 1;
        } else {
            min = pivot + 1;
        }
    }
    return -1;
};
