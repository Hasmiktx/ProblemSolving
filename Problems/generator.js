function* gen(n) {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 1; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    yield c;
  }
}
const genFunc = gen(9);
for (let val of genFunc) {
  console.log(val);
}

function* gen(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

const my = gen(0, 10);
undefined;
for (let val of my) {
  console.log(val);
}
