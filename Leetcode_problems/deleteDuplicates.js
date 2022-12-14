// Input: head = [1, 1, 2];
// Output: [1, 2];
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

function ListNode(value) {
  this.value = value;
  this.next = null;
}
function makeObj(arr) {
  let head = new ListNode(arr[0]);
  let list = head;
  //   console.log(list.head.value);
  //   console.log(list.head.next)
  for (let i = 1; i < arr.length; i++) {
    list.next = new ListNode(arr[i]);
    list = list.next;
  }
  return head;
}
const head = makeObj([1, 1, 2, 3, 3]);
console.log(head.next);
function deleteDuplicates(head) {}
