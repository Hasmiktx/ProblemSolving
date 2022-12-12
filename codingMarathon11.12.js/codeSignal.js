function killBit(n, k) {
  const binary = n.toString(2);

  let binaryArr;
  if (Number(binary.charAt(k)) === 1) {
    binaryArr = binary.split("");
    binaryArr[k] = 0;
    return parseInt(binaryArr.join(""), 2);
  }

  return n;
}
console.log(killBit(37, 3)); //33
console.log(killBit(37, 4)); //37
