const lengthOfLongestSubstring = (s) => {
  let arr = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    str += s[i];
    // console.log(str);
    for (let j = i + 1; j < s.length; j++) {
      if (str.includes(s[j])) {
        arr.push(str);
        str = "";
        break;
      }
      str += s[j];
    }
    if (str) {
      arr.push(str);
      str = "";
    }
  }

  let res = 0;
  for (i = 0; i < arr.length; i++) {
    res = Math.max(res, arr[i].length);
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("asjrgapa"));
