const isPowerOfTwo = (n) => {
  let res = Math.log2(n);
  // return res

  if (Number.isInteger(res)) {
    return true;
  } else {
    return false;
  }
};

console.log(isPowerOfTwo(8));