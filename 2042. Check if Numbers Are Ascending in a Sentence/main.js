var areNumbersAscending = function (s) {
  let arr = s.split(" ");
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(arr[i])) {
      newArr.push(parseInt(arr[i]));
    }
  }
  let b = newArr.slice().sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i] != b[i] ||
      (newArr[i - 1] != undefined && newArr[i - 1] == newArr[i])
    )
      return false;
  }
  return true;
};
