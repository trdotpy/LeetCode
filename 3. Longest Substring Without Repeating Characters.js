// Time Complexity: O(n), loops through s once
// Space Complexity: O(n), creates a set to store the characters of s

var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    // handle empty string
    return 0;
  }

  let charSet = new Set(); // Initialize a set to store unique characters
  let maxLength = 0; // Initialize a maxLength variable
  let i = 0; // Initialize a left pointer
  let j = 0; // Initialize a right pointer

  while (j < s.length) {
    // Loop until the right pointer reaches the end of the string
    if (!charSet.has(s.charAt(j))) {
      // If the character is not in the set
      charSet.add(s.charAt(j)); // Add the character to the set
      maxLength = Math.max(maxLength, j - i + 1); // Update maxLength (+1 to account for the current character)
      j++; // Move the right pointer to the right
    } else {
      // If the character is in the set
      charSet.delete(s.charAt(i)); // Remove the leftmost character from the set
      i++; // Move the left pointer to the right
    }
  }

  return maxLength; // Return maxLength
};
