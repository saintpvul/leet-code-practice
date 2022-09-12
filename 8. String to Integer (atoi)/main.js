function myAtol(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result = result * 10 + s[i].charCodeAt(0) - "0".charCodeAt(0);
    return result;
  }
}

let str = "123123";

console.log(myAtol(str));
