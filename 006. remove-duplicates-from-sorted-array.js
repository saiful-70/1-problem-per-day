const removeDuplicates = function(nums) {
  if(nums.length <= 1) {
    return nums.length;
  }
  let i, j, cnt=1;
  for(i=0; i<nums.length-1; i++) {
    if(nums[i] < nums[i+1]) {
      nums[cnt] = nums[i+1]
      cnt++;
    }
  }
  return nums;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));