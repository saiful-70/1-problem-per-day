const searchInsert = (nums, target) => {
  let i,
    mid,
    left = 0,
    right = nums.length-1,
    flag = 0,
    len = nums.length;
  // mid = (left+right)/2;
  // if(taget === nums[mid]) {
  //   return mid;
  // }
  while (left <= right) {
    // console.log(mid);
    mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
      flag = 0;
    } else if (target > nums[mid]) {
      left = mid + 1;
      flag = 0;
    }
  }

  if(target < nums[0])
  return 0
  if(target > nums[len-1])
  return len;

  if (flag === 0) {
    for (i = 0; i < len; i++) {
      if (target > nums[i] && target < nums[i + 1]) {
        return i + 1;
      }
    }
  }
};

console.log(searchInsert([1], 0));
