function solve(arr) {
  result = [];

  for (const w of arr) {
    if (w === "print") {
      print();
    }
    let [functionName, word] = w.split(" ");
    if (functionName === "add") {
      add(word);
    } else if (functionName === "remove") {
      remove(word);
    }
  }

  function remove(wrd) {
    result = result.filter((e) => e !== wrd);
  }
  function add(wrd) {
    result.push(wrd);
  }
  function print() {
    console.log(result.join(","));
  }

  return {
    remove,
    add,
    print,
  };
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
solve(["add pesho", "add george", "add peter", "remove peter", "print"]);
