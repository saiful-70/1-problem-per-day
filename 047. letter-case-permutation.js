const letterCasePermutation = (s) => {
  s = s.toLowerCase();
  let res = [];

  res.push(s);
  res.push(s.toUpperCase());

  for (let i = 0; i < s.length; i++) {
    let str = [],
      str2 = [];
    if (s[i] > "a" && s[i] < "z") {
      for (let j = 0; j < s.length; j++) {
        if (i === j) {
          str.push(s[j]);
          str2.push(s[j].toUpperCase());
        } else {
          str.push(s[j].toUpperCase());
          str2.push(s[j].toLowerCase());
        }
      }

      res.push(str.join(""));
      res.push(str2.join(""));
    }
  }

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  return res.filter(onlyUnique);
};

// console.log(letterCasePermutation("a1b2"));
// console.log(letterCasePermutation("0"));
// console.log(letterCasePermutation("12345"));
console.log(letterCasePermutation("dnTJ"));
