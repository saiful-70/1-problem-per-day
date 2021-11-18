const hammingWeight = function (n) {
  let res = n.toString(2).split("").filter(el => el === "1");
  return res.length
};

console.log(hammingWeight(00000000000000000000000000001011));
