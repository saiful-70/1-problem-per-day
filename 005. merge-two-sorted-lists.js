const mergeTwoLists = function (l1, l2) {
  let node = new ListNode()
  let current = node

  while(l1 && l2) {
    if(l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2;
      l2 = l2.next
    }
    current = current.next
  }

  while(l1) {
    current.next = l1;
    l1 = l1.next
    current = current.next
  }

  while(l2) {
    current.next = l2;
    l2 = l2.next;
    current = current.next
  }

  return node.next;
};