const singleNonDuplicate = (nums) => {
    // let left = 0, right = nums.length-1, i;
    if(nums.length ===1) {
    return nums[0]
    }
    for(let i=0; i<nums.length-1;) {
      if( nums[i] !== nums[i+1]) {
        return nums[i]
      } else {
        i+=2;
      }
    }
    return nums[nums.length-1]
};

console.log(singleNonDuplicate([2,3,3,7,7,10,10]));