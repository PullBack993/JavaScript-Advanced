function solution(arr, startIndx, endIndx) {
  if (Array.isArray(arr) == false) {
    return NaN;
  }
  if (startIndx < 0) {
    startIndx = 0;
  }
  if (endIndx > arr.length - 1) {
    endIndx = arr.length - 1;
  }
  let result = arr.slice(startIndx, endIndx + 1).map(Number);
  result = result.reduce((acc, curr) => acc + curr, 0);
  return result;
}

// solution([10, 20, 30, 40, 50, 60], 3, 300);
// console.log(solution([10, 'twenty', 30, 40], 0, 2))
console.log(solution([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
