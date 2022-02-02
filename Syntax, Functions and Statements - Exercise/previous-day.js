function solve(year, month, day) {
  let previousDay = new Date(year, month ,day === 1 ? day - 2 : day - 1);
  return `${previousDay.getFullYear()}-${previousDay.getMonth()}-${previousDay.getDate()}`

}

console.log(solve(2016, 9, 30));
console.log(solve(2016, 10, 1));
