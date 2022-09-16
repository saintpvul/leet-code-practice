/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

//solution

var containsDuplicate = function (nums) {
  let curr = [];
  for (let i = 0; i < nums.length; i++) {
    if (curr.indexOf(nums[i]) !== -1) {
      return true;
    }
    curr.push(nums[i]);
  }
  return false;
};
