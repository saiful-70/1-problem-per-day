const permute = (nums) => {
  let res = [];

  const dfs = (tempArr = [], remain = nums) => {
    if (remain.length === 0) {
      res.push(tempArr);
      return;
    }

    for (let current of remain) {
      console.log(tempArr);
      dfs(
        [...tempArr, current],
        remain.filter((val) => val !== current)
      );
    }
  };

  dfs();
  // return res;
};

console.log(permute([1, 2, 3]));
