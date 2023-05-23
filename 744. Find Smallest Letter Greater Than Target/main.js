/*

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

*/

// solution

/*


var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length - 1;

  while (start <= end) {
    const pivot = Math.floor(start + (end - start) / 2);
    const current = letters[pivot];

    if (current > target) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  } 
  return letters[start % letters.length];
};

*/

var nextGreatestLetter = function (letters, target) {
    let start = 0;
    let end = letters.length - 1;

    while (start <= end) {
        let pivot = Math.floor(start + (end - start) / 2);
        const current = letters[pivot].charCodeAt(0);

        if (current > target.charCodeAt(0)) {
            end = pivot - 1;
        } else {
            start = pivot + 1;
        }
    }
    if (start >= letters.length) {
        return letters[0];
    }

    return letters[start];
};
