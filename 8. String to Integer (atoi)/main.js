var myAtoi = function (s) {
  let sign = "+",
    number = "",
    min = Math.pow(-2, 31),
    max = Math.pow(2, 31) - 1;

  s = s.trim("");

  for (let i = 0; i < s.length; i++) {
    if (i === 0 && (s[0] === "-" || s[0] === "+")) sign = s[0];
    else if (!isNaN(s[i]) && s[i].trim("").length !== 0) number += s[i];
    else break;
  }
  number = (sign === "-" ? sign : "") + (number.length === 0 ? 0 : number);
  return number < min ? min : number > max ? max : number;
};
