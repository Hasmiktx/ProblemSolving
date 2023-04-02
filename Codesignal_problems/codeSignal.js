function solution(n, k) {
  return n & (n ^ (1 << (k - 1)));
}

function solution(n, k) {
  return n & ~(1 << (k - 1));
}

function killBit(n, k) {
  const binary = n.toString(2);

  let binaryArr;
  ind = binary.length - k;

  if (Number(binary.charAt(ind)) === 1) {
    binaryArr = binary.split("");
    binaryArr[ind] = 0;
    return parseInt(binaryArr.join(""), 2);
  }

  return n;
}
console.log(killBit(37, 3)); //33
console.log(killBit(37, 4)); //37
