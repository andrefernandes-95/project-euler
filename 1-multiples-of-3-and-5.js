/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function main() {
  console.log(listNumbers(1000));
}

function listNumbers(max) {
  let sum = 0;
  for (let i = 0; i < max; i++) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) sum += i;
  }
  return sum;
}

function isMultiple(value, multipleOf) {
  return value % multipleOf === 0;
}

main();
