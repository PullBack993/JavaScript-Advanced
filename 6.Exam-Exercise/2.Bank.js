class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
    this.transactions = [];
  }

  newCustomer(customer) {
    let findCustomer = this.allCustomers.find(
      (x) =>
        x.firstName == customer.firstName &&
        x.lastName == customer.lastName &&
        x.personalId == customer.personalId
    );
    if (findCustomer) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }

    this.allCustomers.push({
      firstName: customer.firstName,
      lastName: customer.lastName,
      personalId: customer.personalId,
      money: Number(0),
      counter: 0
    });
    return customer;
  }

  depositMoney(personalId, amount) {
      personalId = Number(personalId)
    let currentCustomer = this.findCustomer(personalId);
    if (!currentCustomer) {
      throw new Error(`We have no customer with this ID!`);
    }

    this.transactions.push({counter:(currentCustomer.counter) +=1,
         firstName:currentCustomer.firstName,
          lastName:currentCustomer.lastName,
           money:amount,
            id:currentCustomer.personalId,
            transactionName:'deposit',});

    currentCustomer.money += Number(amount);
    return `${currentCustomer.money}$`;
    
  }
  withdrawMoney(personalId, amount) {
    let currentCustomer = this.findCustomer(personalId);
    if (!currentCustomer) {
      throw new Error("We have no customer with this ID!");
    }
    if (currentCustomer.money < amount) {
      throw new Error(
        `${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`
      );
    }
    currentCustomer.money -= amount;
    this.transactions.push({counter:(currentCustomer.counter) +=1,
         firstName:currentCustomer.firstName,
          lastName:currentCustomer.lastName, 
          money:amount,
           id:currentCustomer.personalId,
        transactionName:'withdrew'});
    return `${currentCustomer.money}$`;
  }

  customerInfo(personalId) {
    let currentCustomer = this.findCustomer(personalId);
    if (!currentCustomer) {
      throw new Error(`We have no customer with this ID!`);
    }

    let result = [];
    let currentIdTransaction = []
    result.push(`Bank name: ${this._bankName}\n`);
        let name = currentCustomer.firstName
        let lastName = currentCustomer.lastName
        let custId = currentCustomer.personalId
        let totalMoney = currentCustomer.money
      result.push(`Customer name: ${name} ${lastName}\nCustomer ID: ${custId}\nTotal Money: ${totalMoney}$\n`)
      result.push(`Transactions:\n`);

    for (const transaction in this.transactions) {
       
       if (this.transactions[transaction].id == personalId){
        let cName = this.transactions[transaction].firstName;
        let cLastName = this.transactions[transaction].lastName;
        let cTotalMoney = this.transactions[transaction].money
        let counter = this.transactions[transaction].counter
        let trName = this.transactions[transaction].transactionName
        

        if (trName === 'withdrew'){
            currentIdTransaction.push(`${counter}. ${cName} ${cLastName} ${trName} ${cTotalMoney}$!`)
        }else{
            currentIdTransaction.push(`${counter}. ${cName} ${cLastName} made ${trName} of ${cTotalMoney}$!`)
        }
       }
    }
    result.push(currentIdTransaction.reverse().join("\n"))
    return result.join('')
    
  }
  findCustomer(personalId) {
    let findCustomer = this.allCustomers.filter(
      (c) => c.personalId === personalId
    )[0];
    return findCustomer;
  }
}



let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);
// console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233261237, 125));

console.log(bank.customerInfo(6233267));



// `Bank name: SoftUni Bank\n
// Customer name: Svetlin Nakov\n
// Customer ID: 1111111\nTotal Money: 375$\n
// Transactions:\n3. Svetlin Nakov withdrew 125$!\n
// 2. Svetlin Nakov made deposit of 250$!\n
// 1. Svetlin Nakov made deposit of 250$!'

// 'Bank name: SoftUni Bank\n
// Customer name: Svetlin Nakov\n
// Customer ID: 1111111\nTotal Money: 375$\'\n
// Transactions:\n3. Svetlin Nakov withdrew 125$!\n
// 2. Svetlin Nakov made deposit of 250$!\n
// 1. Svetlin Nakov made deposit of 250$!`
