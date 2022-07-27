var solution = function(isBadVersion) {

  return function(n) {
  let left = 0, right = n-1;
  while(left <=right) {
    let mid = Math.floor((left+right)/2)
    if(isBadVersion(mid)) {
      right = mid-1;
    } else if(isBadVersion(mid+1)) {
      return mid+1;
    } else {
      left = mid+1;
    }
  }
  }
};