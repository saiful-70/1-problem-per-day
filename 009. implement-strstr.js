const strStr =(haystack, needle) => {
  if(needle.length === 0) {
    return 0;
  }
  const index = haystack.search(needle)
  return index;
};

console.log(strStr("aaaaa","bb"));