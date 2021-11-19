function solve(products) {
  let prObj = [];
  let result = [];

  for (let i = 0; i < products.length; i++) {
    let [prodName, quantity] = products[i].split(" => ");
    if (!prObj[prodName]) {
      prObj[prodName] = [];
      prObj[prodName] = Number(quantity);
      if (prObj[prodName] >= 1000) {
        bottleCreator(prodName);
      }
    } else {
      prObj[prodName] += Number(quantity);
      if (prObj[prodName] >= 1000) {
        bottleCreator(prodName);
      }
    }
  }
  function bottleCreator(name) {
    while (prObj[name] >= 1000) {
      prObj[name] -= 1000;
      if (!result[name]) {
        result[name] = 0;
      }
      result[name] += 1;
    }
  }

  for (const key in result) {
    console.log(`${key} => ${result[key]}`);
  }
}

console.log(
  solve([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789",
  ])
);

console.log(
  solve([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549",
  ])
);
