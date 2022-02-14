class ChristmasDinner {
  constructor(budget) {
    if (Number(budget) <= 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this.budget = Number(budget);
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  shopping(product) {
    let type= product[0]
    let price = product[1]
    price = Number(price);
    if (this.budget <= price) {
      throw new Error("Not enough money to buy this product");
    }else{
        this.budget -= price;
        this.products.push(type);
    return `You have successfully bought ${type}!`; // !!!! type ???
    }

  }

  recipes(recipe) {
    let productList = recipe.productsList;
    let recipeName = recipe.recipeName;
    let saveRname = recipeName
    productList.forEach((product) => {
      if (!this.products.includes(product)) {
        throw new Error("We do not have this product");
      }
    });

    this.dishes.push({ recipeName: recipeName, productList:productList });
    return `${saveRname} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    let findDish = this.dishes.find((x) => x.recipeName === dish)
    if (!findDish){
        throw new Error("We do not have this dish");
    }
    if (this.guests.hasOwnProperty(name)) {
      throw new Error("This guest has already been invited");
    }

    this.guests[name] = dish
    return `You have successfully invited ${name}!`
  }

  showAttendance(){
      let result = []
    for (const key in this.guests) {
       let name = key
       let dish = this.guests[key] // recept name
       let product = this.dishes.find((x) => x.recipeName === dish)
       let products = product.productList.join(', ')
        result.push(`${name} will eat ${dish}, which consists of ${products}`)
    }
    return result.join('\n')
  }
}

class ChristmasDinner {
  constructor(budget) {
    if (Number(budget) <= 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this.budget = Number(budget);
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }
  shopping(product) {
    let type = product[0];
    let price = product[1];
    if (Number(price) > this.budget) {
      throw new Error("Not enough money to buy this product");
    } else {
      this.products.push(type);
      this.budget -= Number(price);
      return `You have successfully bought ${type}!`;
    }
  }
  recipes(recipe) {
    recipe.productsList.forEach((p) => {
      if (!this.products.includes(p)) {
        throw new Error(`We do not have this product`);
      }
    });
    this.dishes.push({
      recipeName: recipe.recipeName,
      productsList: recipe.productsList,
    });
    return `${recipe.recipeName} has been successfully cooked!`;
  }
  inviteGuests(name, dish) {
    if (!this.dishes.find((e) => e.recipeName === dish)) {
      throw new Error(`We do not have this dish`);
    }
    if (this.guests.hasOwnProperty(name)) {
      throw new Error("This guest has already been invited");
    }
    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }
  showAttendance() {
    let result = [];

    for (const [guest, dish] of Object.entries(this.guests)) {
      let currentDish = this.dishes.find((d) => d.recipeName === dish);
      result.push(
        `${guest} will eat ${dish}, which consists of ${currentDish.productsList.join(
          ", "
        )}`
      );
    }
    return result.join("\n");
  }
}
