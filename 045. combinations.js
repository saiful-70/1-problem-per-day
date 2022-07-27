const combine = (n, k) => {
  let res = [];
  let tempArr = [];

  const backTrack = (st) => {
    if (tempArr.length === k) {
      res.push([...tempArr]);
    } else {
      for (let i = st; i <= n; i++) {
        tempArr.push(i);
        backTrack(i + 1);
        tempArr.pop();
      }
    }
  };

  backTrack(1);
  return res;
};

console.log(combine(4, 2));
