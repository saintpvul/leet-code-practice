/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

//solution

let str = " A man, a plan, a canalino: Panama   ";
let palStr = "race car";

var isPalindrome = function (s) {
  let notPal = s
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
  console.log(notPal);
  let pal = s
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .reverse()
    .join("");
  console.log(pal);
  if (pal === notPal) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(str));

console.log(isPalindrome(palStr));
