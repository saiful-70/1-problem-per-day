const isAnagram = (s, t) => {
  let str1 =s.split(""), str2=t.split("")
  str1.sort();
  str2.sort();
  console.log(str1.join(""), str2.join(""));
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram("anagram","nagaram"));