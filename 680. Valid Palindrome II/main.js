/*

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

*/

// solution

function checkPal(s) {
  let i = 0;
  let j = s.length - 1;
  let count = 0;

  while (i < j) {
    if (s[i] !== s[j]) {
      return isPal(s, i + 1, j) || isPal(s, i, j - 1);
    }
    i++;
    j--;
  }
  return true;
}

function isPal(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}
