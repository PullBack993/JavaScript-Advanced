class Restaurant {
    constructor(budgetMoney) {
      this.budgetMoney = budgetMoney;
      this.menu = {};
      this.stockProducts = {};
      this.history = [];
    }
  
    loadProducts(arr) {
        let result = []
      for (let i = 0; i < arr.length; i++) {
        let [prodName, prodQuantity, prodTotalPrice] = arr[i].split(" ");
        prodQuantity = Number(prodQuantity);
        prodTotalPrice = Number(prodTotalPrice);
  
        if (prodTotalPrice <= this.budgetMoney) {
          if (!this.stockProducts[prodName]) {
            this.stockProducts[prodName] = 0;
          }
          this.stockProducts[prodName] += prodQuantity;
          this.budgetMoney -= prodTotalPrice
          this.history.push(`Successfully loaded ${prodQuantity} ${prodName}`)
        }else{
              this.history.push(`There was not enough money to load ${prodQuantity} ${prodName}`)
        }
      }
      return result.join('\n');
    }
    addToMenu(meal,neededProducts,price){
        if (!this.menu[meal]){
          this.menu[meal] = {
              neededProducts: {},
              price: Number(price)
  
          }
          neededProducts.forEach(product => {
              let [name,quantity] = product.split(' ')
              quantity = Number(quantity)
              this.menu[meal].neededProducts[name] = quantity
          });
          let counter = Object.keys(this.menu).length
          if (counter == 1){
              return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
          }else{
              return `Great idea! Now with the ${meal} we have ${counter} meals in the menu, other ideas?`
          }
    
        }else{
          return `The ${meal} is already in the our menu, try something different.`
        }
        
    }
    showTheMenu(){
        if (Object.keys(this.menu).length == 0){
          return  "Our menu is not ready yet, please come later..."
        }
        let result = []
        for (const meal in this.menu){
          result.push(`${meal} - $ ${this.menu[meal].price}`)
        }
        return result.join("\n")
    }
    makeTheOrder(meal){
      let productsMeal = {}
      if (!this.menu[meal]){
         return `There is not ${meal} yet in our menu, do you want to order something else?`
      }else{
          
          for (const product in this.menu[meal].neededProducts) {
             if(!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].neededProducts[product]){
                 return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
             }else{
                  productsMeal[product] = this.menu[meal].neededProducts[product]
             }
          }
      }
      for (const product in productsMeal) {
         this.stockProducts[product] -= productsMeal[product]
      }
    this.budgetMoney+= this.menu[meal].price;

      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
  }
  