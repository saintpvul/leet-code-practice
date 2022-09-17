/*

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

*/

//solution

function containsNearbyDuplicate(nums, k) {
  let length = nums.length;
  if (!length) return false;
  if (k > length) k = length - 1;
  const object = {};
  for (let i = 0; i <= k; i++) {
    if (object[nums[i]]) return true;
    object[nums[i]] = 1;
  }
  if (k !== length - 1) {
    delete object[nums[0]];
    let j = 1;
    for (let i = k + 1; i < length; i++) {
      if (object[nums[i]]) return true;
      else {
        object[nums[i]] = 1;
        delete object[nums[j]];
        j = j + 1;
      }
    }
  }
  return false;
}
