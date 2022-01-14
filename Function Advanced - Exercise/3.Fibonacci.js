function getFibonator() {
  let firstNum = 0; // 1 // 1 // // 2 // 3 // 5 // 8
  let secondNum = 1; // 0 // 1 // 1 // 2 // 3 // 5

  function generateNums() {
    let nextNumber = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = nextNumber;
    return nextNumber;
  }

  return generateNums;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
