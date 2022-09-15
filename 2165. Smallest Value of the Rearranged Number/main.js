/* 

You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.

Return the rearranged number with minimal value.

Note that the sign of the number does not change after rearranging the digits.

*/

// solution

function find(num) {
  let isNeg = num < 0;
  num = `${Math.abs(num)}`.split("");
  if (isNeg) {
    num.sort((a, b) => b - a);
    return Number("-" + num.join(""));
  } else {
    num.sort((a, b) => a - b);
    const zeroIndex = num.findIndex((n) => n !== "0");
    if (zeroIndex !== -1) {
      [num[0], num[zeroIndex]] = [num[zeroIndex], num[0]];
    }
    return Number(num.join(""));
  }
}
