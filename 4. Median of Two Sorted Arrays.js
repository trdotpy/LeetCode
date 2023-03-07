// Time: O(log(m + n)), where m and n are the lengths of nums1 and nums2 respectively
// Space: O(1), no extra space is used because only variables are used to store the indices of the two halves of the merged array

var findMedianSortedArrays = function (nums1, nums2) {
  // Ensure that nums1 is the shorter array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  // Get the lengths of the two arrays
  const m = nums1.length;
  const n = nums2.length;

  // Initialize the minimum and maximum indices of the left half of the merged array
  let minIndex = 0;
  let maxIndex = m;

  while (minIndex <= maxIndex) {
    // Calculate the index of the middle element of the left half of the merged array
    const i = Math.floor((minIndex + maxIndex) / 2);
    // Calculate the index of the middle element of the right half of the merged array
    const j = Math.floor((m + n + 1) / 2) - i;

    // Check if the current partitioning is valid
    if (i < m && nums2[j - 1] > nums1[i]) {
      // i is too small, move it to the right
      minIndex = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      // i is too big, move it to the left
      maxIndex = i - 1;
    } else {
      // i is perfect

      // Calculate the maximum value in the left half of the merged array
      let maxLeft;
      if (i === 0) {
        maxLeft = nums2[j - 1];
      } else if (j === 0) {
        maxLeft = nums1[i - 1];
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      // If the total length of the two arrays is odd, return the middle element
      if ((m + n) % 2 === 1) {
        return maxLeft;
      }

      // Calculate the minimum value in the right half of the merged array
      let minRight;
      if (i === m) {
        minRight = nums2[j];
      } else if (j === n) {
        minRight = nums1[i];
      } else {
        minRight = Math.min(nums1[i], nums2[j]);
      }

      // If the total length of the two arrays is even, return the average of the middle two elements
      return (maxLeft + minRight) / 2;
    }
  }
};
