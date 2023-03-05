// Time Complexity: O(n), loops through l1 and l2 once
// Space Complexity: O(n), creates a new list to store the result

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0); // dummy node to hold the head of the result list
  let current = dummy; // init current node to build the result list
  let carry = 0; // init carry to 0

  while (l1 || l2 || carry) {
    // Loop until l1 and l2 nodes are null and carry is 0
    let sum = carry; // Add carry to sum

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10); // update carry
    sum = sum % 10; // update sum

    current.next = new ListNode(sum); // add sum to the result list
    current = current.next; // update the current node
  }

  return dummy.next; // return the head of the result list
};
