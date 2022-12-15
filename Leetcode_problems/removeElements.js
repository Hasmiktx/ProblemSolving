/*Given the head of a linked list and an integer val, remove all the nodes of the
 linked list that has 
Node.val == val, and return the new head. */

// Input: (head = [1, 2, 6, 3, 4, 5, 6]), (val = 6);
// Output: [1, 2, 3, 4, 5];

let removeElements = function (head, val) {
  let prev = new ListNode(-1);

  prev.next = head;
  let dummy = prev;
  while (prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return dummy.next;
};
