function decimalToBinary(num) {
  let str = "";
  //   let k = 31;
  let k = 7;
  while (k >= 0) {
    if (num & (1 << k)) {
      str += "1";
    } else {
      str += "0";
    }
    k--;
  }
  return str;
}
console.log(decimalToBinary(88));
