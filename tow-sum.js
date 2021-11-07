const twoSum = (nums, target) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        arr.push(i, j);
        break;
      }
    }
    if (arr.length !== 0) {
      break;
    }
  }
  return arr;
};
