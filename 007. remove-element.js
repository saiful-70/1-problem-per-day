const removeElement = (nums, val) => {
  let i, cnt = 0;
  for(i=0; i<nums.length; i++) {
    if(nums[i] == val) {
      nums.splice(i,1);
      i--
    }
  }
  return nums.length;
}