/*


Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.


*/

//solition

let str = "hello";
/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let foundedVowels = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) > -1) {
      foundedVowels.push(s[i]);
    }
  }
  console.log(foundedVowels);
  let splittedArr = s.split("");
  let lastIndex = foundedVowels.length - 1;
  for (let i = 0; i < splittedArr.length; i++) {
    if (vowels.indexOf(splittedArr[i]) > -1) {
      splittedArr[i] = foundedVowels[lastIndex];
      lastIndex--;
    }
  }
  if (s !== splittedArr.join("")) {
    return splittedArr.join("");
  }
  if (s !== null) {
    return s;
  }
}
