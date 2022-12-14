let getIntersectionNode = function (headA, headB) {
  var lenA = getLen(headA);
  var lenB = getLen(headB);
  let diff = Math.abs(lenA - lenB);

  if (lenA > lenB) {
    while (diff--) headA = headA.next;
  } else {
    while (diff--) headB = headB.next;
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

var getLen = function (head) {
  var len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
};
