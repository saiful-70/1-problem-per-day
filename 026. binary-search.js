const search = (nums, target) => {
  let mid;
  let left = 0, right = nums.length-1;

  while(left<=right) {
    // console.log("here");
    mid = Math.floor((left+right)/2);
    if(target === nums[mid]) {
      return mid;
    } else if(target < nums[mid]) {
      right = mid-1;
    } else if(target > nums[mid]) {
      left = mid+1;
    }
  }

  return -1;

}
console.log(search([-1,0,3,5,9,12], 2));