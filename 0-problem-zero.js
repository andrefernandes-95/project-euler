let maxSquareNumbers = 703 * 1000;

function getSquareNumbers(max = 5) {
  const squareNumbers = [];

  /* 
  for (let i = 0; squareNumbers.length < max; i++) {
    if (i > 0 && Math.sqrt(i) === Math.round(Math.sqrt(i))) {
      squareNumbers.push(i);
    }
  }*/

  // Faster, just start at 1 and always square the int and save the produced square for max iterations
  for (let i = 1; i <= max; i++) {
    squareNumbers.push(BigInt(i) * BigInt(i));
  }

  return squareNumbers;
}

function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2n !== 0n);
}

function main() {
  const squareNumbers = getSquareNumbers(maxSquareNumbers);
  const oddNumbers = filterOddNumbers(squareNumbers);

  // When summing hundreds of thousands of large squared numbers, the accumulator in .reduce() exceeds Number.MAX_SAFE_INTEGER (2^53 - 1),
  // causing silent precision loss and a wrong answer. Fix: use BigInt
  const sum = oddNumbers.reduce((prev, cur) => prev + cur, 0n);
  return sum;
}

const sumOfAllOddNumbers = main();
console.log("sumOfAllOddNumbers:", sumOfAllOddNumbers.toString());
