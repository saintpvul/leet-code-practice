/*

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

*/

//solution

let palNum = 12321;
let num = 123;

function isPal(x) {
  let reversedNum = x.toString().split("").reverse().join("");
  if (+reversedNum === +x) {
    return true;
  } else {
    return false;
  }
}

isPal(num);
isPal(palNum);
