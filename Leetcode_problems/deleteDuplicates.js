/*Given the head of a sorted linked list, delete all duplicates such that each element
 appears only once.
  Return the linked list sorted as well. */

// Input: head = [1, 1, 2];
// Output: [1, 2];
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

/*Time Complexity ???*/
function ListNode(value) {
  this.value = value;
  this.next = null;
}

let deleteDuplicates = function (head) {
  let linkedList = [];
  let list = new ListNode(head[0]);
  let node = list;
  for (let i = 1; i < head.length; i++) {
    node.next = new ListNode(head[i]);
    node = node.next;
  }
  let current = list;
  while (current && current.next) {
    if (current.value === current.next.value) {
      linkedList.push(current.next.value);
      current.next = current.next.next;
    } else {
      linkedList.push(current.value);
      current = current.next;
    }
  }
  // return list;
  //console.log(linkedList);
  return linkedList;
};
deleteDuplicates([1, 1, 2, 3, 3]);
