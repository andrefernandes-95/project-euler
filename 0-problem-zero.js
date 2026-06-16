let maxSquareNumbers = 703000;

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
    squareNumbers.push(i * i);
  }

  return squareNumbers;
}

function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function main() {
  const squareNumbers = getSquareNumbers(maxSquareNumbers);
  const oddNumbers = filterOddNumbers(squareNumbers);

  const sum = oddNumbers.reduce((prev, cur) => prev + cur, 0);
  return sum;
}

const sumOfAllOddNumbers = main();
console.log("sumOfAllOddNumbers:", sumOfAllOddNumbers);
