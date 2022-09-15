let nums = [1, 23, 31, 91, 57, 7];

function sortedNums(nums) {
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return nums[0] === 0 ? "" + nums[0] : nums.join("");
}

console.log(sortedNums(nums));
console.log(nums);
