const lengthOfLastWord = function (s) {
  const res = s.split(" ").filter((val) => val.length > 0);
  return res[res.length-1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
