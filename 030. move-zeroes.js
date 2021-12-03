const moveZeroes = (nums) => {
  if (nums.length === 1) return;

  let i = 0;
  let len = nums.length;
  let cnt = 0;

  for (i = 0; i < len; i++) {
    if (nums[i] === 0) {
      cnt++;
      nums.splice(i, 1);
      i--;
    }
  }

  for (i = 0; i < cnt; i++) {
    nums.push(0);
  }
  // return nums;
};

console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 0]));
