let firstUniqChar = function (s) {
  let single;
  for (let i = 0; i < s.length; i++) {
    single = 0;

    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        single += 1;
      }
    }
    if (single === 1) {
      return i;
    }
  }
  return -1;
};
