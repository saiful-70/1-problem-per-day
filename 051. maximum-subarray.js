const maxSubArray = (nums) => {
  let max = nums[0];
  let tempMax = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i]);
    if (max > tempMax) {
      tempMax = max
    }
  }

  return tempMax;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
