/*Given the head of a singly linked list, reverse the list, and return the reversed list. */
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

/* Time Complexity O(n)*/
let reverseList = function (head) {
  let prev = null;
  let temp = null;
  let cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};
