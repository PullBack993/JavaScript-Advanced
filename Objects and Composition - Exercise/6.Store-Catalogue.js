function solve(arr) {
  let sortArr = arr.sort();
  let result = factorArr(sortArr);

  function factorArr(sortArr) {
    let arrFormat = [];
    let letters = [];
    for (let i = 0; i < sortArr.length; i ++) {


      if (i === 0){
        letters.push(sortArr[i].charAt(0));
        arrFormat.push(sortArr[i].charAt(0));

      }else if(sortArr[i][0] !== letters[0][0]){
        letters.push(sortArr[i][0]);
        letters.shift()
        arrFormat.push(letters[0][0]);
      }

      let [name, price] = sortArr[i].split(" : ");
      arrFormat.push(`  ${name}: ${price}`);

    }

    return arrFormat
  }
  
  return result.join("\n");
}

console.log(
  solve([
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);
