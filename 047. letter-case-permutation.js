const letterCasePermutation = (s) => {
  let len = s.length;
  let res = [];

  let tempArr = [];

  const backTrack = (i) => {
    if (i === len) {
      return res.push(tempArr.join(""));
    }

    if (s[i] >= "A") {
      tempArr[i] = s[i].toLowerCase();
      backTrack(i + 1);
      tempArr[i] = s[i].toUpperCase();
      backTrack(i + 1);
    } else {
      tempArr[i] = s[i];
      backTrack(i + 1);
    }
  };

  
  backTrack(0);
  return res;
};

console.log(letterCasePermutation("a1b2"));
// console.log(letterCasePermutation("0"));
// console.log(letterCasePermutation("12345"));
// console.log(letterCasePermutation("dnTJ"));
