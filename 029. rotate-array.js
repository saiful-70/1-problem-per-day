const rotate = (nums, k) => {
  let r = k % nums.length;
  const res = nums.splice(0, nums.length - r);
  // return nums
  for (let i = 0; i < res.length; i++) {
    nums.push(res[i]);
  }
  // return nums
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
