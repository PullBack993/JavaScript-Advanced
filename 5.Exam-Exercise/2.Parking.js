class Parking {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.vehicles = [];
  }
  addCar(model, number) {
    if (this.capacity <= this.vehicles.length) {
      throw new Error("Not enough parking space.");
    }
    this.vehicles.push({ model: model, number: number, payed: false });
    return `The ${model}, with a registration number ${number}, parked.`;
  }

  removeCar(number) {
    let findCar = this.vehicles.find((x) => x.number == number);

    if (!findCar) {
      throw new Error("The car, you're looking for, is not found.");
    }

    let findPayed = findCar.payed == false;
    if (findPayed) {
      throw new Error(`${number} needs to pay before leaving the parking lot.`);
    }
    this.vehicles = this.vehicles.filter((x) => x !== findCar);
    return `${number} left the parking lot.`;
  }

  pay(number) {
    let findCar = this.vehicles.find((x) => x.number == number);
    if (!findCar) {
      throw new Error(`${number} is not in the parking lot.`);
    }
    if (findCar.payed == true) {
      throw new Error(`${number}'s driver has already payed his ticket.`);
    }
    findCar.payed = true;
    return `${number}'s driver successfully payed for his stay.`;
  }
  getStatistics(number) {
    if (number) {
      let findCar = this.vehicles.find((x) => x.number == number);
      let carp = "";
      if (findCar.payed) {
        carp = "Has payed";
      } else {
        carp = "Not payed";
      }
      return `${findCar.model} == ${findCar.number} - ${carp}`;
    } else {
      let result = [];
      result.push(
        `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
      this.vehicles = this.vehicles.sort((a, b) =>
        a.model.localeCompare(b.model)
      );
      for (let i = 0; i < this.vehicles.length; i++) {
        let carModel = this.vehicles[i].model;
        let carNumber = this.vehicles[i].number;
        let payed = this.vehicles[i].payed;
        let carp = "";
        if (payed) {
          carp = "Has payed";
        } else {
          carp = "Not payed";
        }

        result.push(`${carModel} == ${carNumber} - ${carp}`);
      }
      return result.join("\n");
    }
  }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("aolvo t600", "TX36c91aCA"));
console.log(parking.addCar("bolvo t600", "TXa3691aCA"));
console.log(parking.addCar("colvo t600", "TXq3691aCA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.removeCar("TX3691CA"));
