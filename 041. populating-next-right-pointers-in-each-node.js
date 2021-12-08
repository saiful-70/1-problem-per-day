const connect = (root) => {
  if (!root) {
    return root;
  }

  const queue = [root];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      let tempNode = queue.shift();

      if (i < len - 1) {
        tempNode.next = queue.length > 0 ? queue[0] : undefined;
      }

      if (tempNode.left) {
        queue.push(tempNode.left);
      }
      if (tempNode.right) {
        queue.push(tempNode.right);
      }
    }
  }

  return root;
};
