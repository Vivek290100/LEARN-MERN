function reverse2(str) {
  let result = "";
  let flag = true;

  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      if (flag) {
        result += str[i + 1] + str[i];
      } else {
        result += str[i] + str[i + 1];
      }
      flag = !flag;
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(reverse2("abcdefghijk"));
