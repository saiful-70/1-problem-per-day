const middleNode = (head) => {
  let current = head;
  let cnt = 1;
  while (current.next) {
    cnt++;
    current = current.next;
  }
  current = head;
  let res = 1;
  if (cnt === 1) {
    return current;
  }
  while (current.next) {
    if (res === Math.floor(cnt / 2)) {
      return current.next;
    }
    res++;
    current = current.next;
  }
};

console.log(middleNode([1, 2, 3, 4, 5]));
