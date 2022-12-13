/*   Ստուգել արդյոք թիվը 2-ի աստիճան է    Time complexity  O(1) */

function chekPowerOfTwo(n) {
  return (n & (n - 1)) === 0;
}

/*   1. հաշվել թվի 1 արժեքով բիթերի քանակը      Time complexity  O(n)*/

function oneBitCount(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}

/*2.ստուգել թվի 1 արժեքով բիթերի քանակը կենտ է, թե զույգ   Time complexity  O(n)*/

function evenOrOdd(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count % 2 === 0 ? "even" : "odd";
}

/*4.շրջել թվի բիթերը(reverse), օրինակ՝ 11110000 -> 00001111 */
