(function solve() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    return this.slice(n);
  };
  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };
  Array.prototype.sum = function () {
    return this.reduce((acc, el) => acc + el);
  };
  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
}())

let testArray = [1, 2, 3, 4, 5];


console.log(testArray.last());
console.log(testArray.skip(1));
console.log(testArray.take(1));
console.log(testArray.sum());
console.log(testArray.average());


