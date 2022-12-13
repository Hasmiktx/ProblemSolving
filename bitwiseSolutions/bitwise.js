/*   1. հաշվել թվի 1 արժեքով բիթերի քանակը */

function oneBitCount(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}

/*2.ստուգել թվի 1 արժեքով բիթերի քանակը կենտ է, թե զույգ*/

function evenOrOdd(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count % 2 === 0 ? "even" : "odd";
}

/*4.շրջել թվի բիթերը(reverse), օրինակ՝ 11110000 -> 00001111 */

// function reverseBit(n) {

// }
