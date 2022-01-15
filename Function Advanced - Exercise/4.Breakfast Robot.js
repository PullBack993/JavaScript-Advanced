function solution() {
  let stocks = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

  function manager(params) {
    const methods = {
      restock(values) {
        let microEl = values[0];
        let quantity = Number(values[1]);
        stocks[microEl] += quantity;
        return "Success";
      },

      prepare(values) {
        let recipe = values[0];
        let quantity = Number(values[1]);

        if (recipe === "apple") {
          let ingrediens = { carbohydrate: 1, flavour: 2 };
          let checkIngrediens = check(quantity, ingrediens);
          if (checkIngrediens === undefined) {
            return "Success";
          } else {
            return `Error: not enough ${checkIngrediens} in stock`;
          }
        } else if (recipe === "turkey") {
          let ingrediens = {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
          };
          let checkIngrediens = check(quantity, ingrediens);
          if (checkIngrediens === undefined) {
            return "Success";
          } else {
            return `Error: not enough ${checkIngrediens} in stock`;
          }
        } else if (recipe === "lemonade") {
          let ingrediens = { carbohydrate: 10, flavour: 20 };
          let checkIngrediens = check(quantity, ingrediens);
          if (checkIngrediens === undefined) {
            return "Success";
          } else {
            return `Error: not enough ${checkIngrediens} in stock`;
          }
        } else if (recipe === "burger") {
          let ingrediens = { carbohydrate: 5, fat: 7, flavour: 3 };
          let checkIngrediens = check(quantity, ingrediens);

          if (checkIngrediens === undefined) {
            return "Success";
          } else {
            return `Error: not enough ${checkIngrediens} in stock`;
          }
        } else if (recipe === "eggs") {
          let ingrediens = { protein: 5, fat: 1, flavour: 1 };
          let checkIngrediens = check(quantity, ingrediens);

          if (checkIngrediens === undefined) {
            return "Success";
          } else {
            return `Error: not enough ${checkIngrediens} in stock`;
          }
        }

        function check(quantity, ingrediens) {
          let allNeedsValue = [];
          for (const prodName in ingrediens) {
            let needIng = ingrediens[prodName] * quantity;
            if (needIng > stocks[prodName]) {
              return prodName;
            }
            allNeedsValue.push({ [prodName]: needIng });
          }
          for (const ingredien of allNeedsValue) {
            let productName = Object.keys(ingredien);
            let productValue = Object.values(ingredien);
            stocks[productName] -= productValue;
          }
        }
      },

      report() {
        let result = [];
        Object.keys(stocks).forEach((key) => {
          result.push(`${key}=${stocks[key]}`);
        });
        return result.join(" ");
      },
    };

    let [command, ...values] = params.split(" ");
    if (values.length === 0) {
      return methods[command]();
    } else {
      return methods[command](values);
    }
  }
  return manager
}

let manager = solution();


// manager("restock flavour 50");
// manager("prepare lemonade 4");
// manager("restock carbohydrate 10");
// manager("restock flavour 10");
// manager("prepare apple 1");
// manager("restock fat 10");
// manager("prepare burger 1");
// manager("report");

// console.log(manager("prepare turkey 1"));
// console.log(manager("restock protein 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));
