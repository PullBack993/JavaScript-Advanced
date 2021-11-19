class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  decrease(length) {
      let count = this.innerLength - length
      this.innerLength = count <= 0 ? 0 : count

  }
  increase(length) {
    this.innerLength += length
  }

  toString() {
    if (this.innerLength === 0) {
        return '...'

  
    }if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`;
    }
    return this.innerString;
    }
}


let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.toString()); // Vik...
s.increase(3);


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(5);
console.log(test.toString()); // Test
