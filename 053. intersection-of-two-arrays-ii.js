const intersect = (nums1, nums2) => {
  let arr = [];
  const newNums2 = [...nums2];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < newNums2.length; j++) {
      if (nums1[i] === newNums2[j]) {
        newNums2.splice(j, 1);
        arr.push(nums1[i]);
        break;
      }
    }
  }
  return arr;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([3, 1, 2], [1, 1]));
