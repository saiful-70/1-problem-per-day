const removeNthFromEnd = (head, n) => {
  let current = head;
  let cnt = 1;
  while (current.next) {
    cnt++;
    current = current.next;
  }
  current = head;
  let res = 1;
  if (cnt - n === 0) {
    head = head.next;
    return head;
  }
  while (current.next) {
    if (res === cnt - n) {
      current.next = current.next.next;
      return head;
    }
    res++;
    current = current.next;
  }
};
