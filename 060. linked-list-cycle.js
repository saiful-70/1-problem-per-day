const hasCycle = (head) => {
  let nodeFirst = (nodeSecond = head);

  while (nodeSecond && nodeSecond.next) {
    if (nodeSecond.next === nodeFirst) {
      return true;
    }
    nodeSecond = nodeSecond.next.next;
    nodeFirst = nodeFirst.next;
  }

  return false;
};
