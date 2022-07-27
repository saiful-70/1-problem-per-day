const conatainsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    // let firstIndex = nums.indexOf(nums[i])
    let lastIndex = nums.lastIndexOf(nums[i]);

    if (lastIndex !== -1 && lastIndex !== i) {
      return true;
    }
  }
  return false;
};

console.log(conatainsDuplicate([1, 2, 3, 1]));
console.log(conatainsDuplicate([1, 2, 3, 4]));
console.log(conatainsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
