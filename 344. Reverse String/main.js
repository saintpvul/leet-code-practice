/*


Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/

// solution

/*
 * @param {character[]} s
 */
//! @return {void} Do not return anything, modify s in-place instead.

var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (end > start) {
    let curr = s[end];
    s[end--] = s[start];
    s[start++] = curr;
  }
};
