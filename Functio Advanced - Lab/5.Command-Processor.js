// short version (Advanced function)
function solution() {
  let str = "";
  return {
    append: (s) => (str += s),
    removeStart: (n) => (str = str.substring(n)),
    removeEnd: (n) => (str = str.substring(0, str.length - n)),
    print: () => console.log(str),
  };
}

// Long version(simply function)
function solution() {
  let string = "";

  function append(word) {
    string += word;
  }

  function removeStart(i) {
    string = string.slice(i);
  }

  function removeEnd(i) {
    string = string.slice(0, -i);
  }

  function print() {
    console.log(string);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}

let firstZeroTest = solution();

firstZeroTest.append("125");
firstZeroTest.append("50");
firstZeroTest.removeStart(2);
firstZeroTest.removeEnd(1);
firstZeroTest.print();
