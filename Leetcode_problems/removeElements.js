/*Given the head of a linked list and an integer val, remove all the nodes of the
 linked list that has 
Node.val == val, and return the new head. */

// Input: (head = [1, 2, 6, 3, 4, 5, 6]), (val = 6);
// Output: [1, 2, 3, 4, 5];

/*Time complexity 0(n) ??? */
function ListNode(value) {
  this.value = value;
  this.next = null;
}

let removeElements = function (head, val) {
  let linkedList = [];
  let list = new ListNode(head[0]);

  let node = list;
  for (let i = 1; i < head.length; i++) {
    node.next = new ListNode(head[i]);
    node = node.next;
  }

  const rootNode = new ListNode(-1);
  rootNode.next = list;
  prev = rootNode;
  cur = list;
  while (cur) {
    if (cur.value === val) {
      prev.next = cur.next;
    } else {
      linkedList.push(cur.value);
      prev = cur;
    }
    cur = cur.next;
  }

  return linkedList;
};
removeElements([1, 2, 6, 3, 4, 5, 6], 6);
