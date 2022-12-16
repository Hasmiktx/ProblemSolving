/*  Given head, the head of a linked list, determine if the linked list has a cycle in it. */

/* This solution  I understand,but not my solution     */

function hasCycle(head) {
  let prev = head;
  let cur = head;
  while (cur && cur.next) {
    prev = prev.next;
    cur = cur.next.next;
    if (prev === cur) {
      return true;
    }
  }
  return false;
}
