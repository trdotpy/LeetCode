// Time Complexity: O(n^2), loops through nums twice
// Space Complexity: O(1), only stores the indices of the two numbers in an array - no extra space is used

var twoSum = (nums, target) => {
  // Loop through nums starting from 0 to the end of the array
  for (let curr = 0; curr < nums.length; curr++) {
    // Calculate the difference between target and the current element of nums, store it as 'complement'
    const complement = target - nums[curr];

    // Loop again through nums starting from the next element of the current element to the end of the array
    for (let next = curr + 1; next < nums.length; next++) {
      const num = nums[next];

      // Check if the current element of nums is equal to the complement
      const isTarget = num === complement;
      if (isTarget) return [curr, next];
    }
  }
};
