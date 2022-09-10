const findMedianSortedArrays = function (nums1, nums2) {
  let merged = [...nums1, ...nums2];
  let nums = [...merged].sort((a, b) => a - b);
  let mid = Math.floor(merged.length / 2);
  return merged.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2]));
