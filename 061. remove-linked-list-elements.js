const removeElements = (head, val) => {
  if (!head) {
    return head;
  }

  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;
  if (current) {
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  return head;
};
