const reverseWords = (s) => {
  let words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("").reverse().join("");
    words[i] = word;
  }
  return words.join(" ");
};

console.log(reverseWords("Let's"));
console.log(reverseWords("Let's take LeetCode contest"));
