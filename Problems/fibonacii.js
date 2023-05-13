function fibonaciiRecursive(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonaciiRecursive(num - 2) + fibonaciiRecursive(num - 1);
  }
}
// console.log(fibonaciiRecursive(9));

function fibonaciiIterative(num) {
  let arr = [0, 1];
  for (let i = 2; i < num + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

function chachFunc(num) {
  let cachArr = [];
  return function () {
    let res = cachArr[num];
    if (res) {
      return res;
    }
  };
}
const cache = {};
const fib = (n) => {
  if (n < 2) return n;
  cache[n] = cache[n] || fib(n - 1) + fib(n - 2);
  return cache[n];
};

const fibonacci = (n) => {
  let a = 0,
    b = 1,
    c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

const fibonacciArr = (n) => {
  if (n <= 1) {
    return n;
  }

  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return result[result.length - 1];
};

let cache = {};

const fibonacciCache = (n) => {
  debugger;
  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  const result = fibonacciCache(n - 1) + fibonacciCache(n - 2);

  cache[n] = result;

  return result;
};

const string = "nurse";
function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  const half = Math.floor(str.length / 2);
  for (let i = 0; i < half; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome(string))

function recursivePalindr(str) {
  if (str.length < 2) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return recursivePalindr(str.substring(1, str.length - 1));
  }
}
