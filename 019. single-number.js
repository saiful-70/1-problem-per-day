const singleNumber = (nums) => {
    const res = nums.filter((val, index) => {
      return nums.indexOf(val) === nums.lastIndexOf(val)
    })
    return res[0]
};

console.log(singleNumber([1,2,1,2,4]));