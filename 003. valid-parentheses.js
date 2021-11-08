const isValid = (s) => {
  let i,
    stack = [];

  for (i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === "(" && s[i] === ")") {
      stack.pop();
    } else if (stack[stack.length - 1] === "{" && s[i] === "}") {
      stack.pop();
    } else if (stack[stack.length - 1] === "[" && s[i] === "]") {
      stack.pop();
    } else [stack.push(s[i])];
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid("{[]}"));
