class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    // Name of method
    money = Number(money);

    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    let findName = this.listOfParticipants.find((x) => x.name == name);
    if (findName) {
      return `The ${name} is already registered at the camp.`;
    }
    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    let participant = { name: name, condition: condition, power: 100, wins: 0 };
    this.listOfParticipants.push(participant);
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    let findName = this.listOfParticipants.find((x) => x.name === name);
    if (!findName) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants = this.listOfParticipants.filter(
      (x) => x.name !== name
    );
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    if (typeOfGame == "WaterBalloonFights" && participant2) {
      let firstPlayer = this.listOfParticipants.find(
        (x) => x.name == participant1
      );
      let secondPlayer = this.listOfParticipants.find(
        (x) => x.name == participant2
      );
      if (!firstPlayer || !secondPlayer) {
        throw new Error(`Invalid entered name/s.`);
      }

      if (firstPlayer.condition !== secondPlayer.condition) {
        throw new Error(`Choose players with equal condition.`);
      }
      if (firstPlayer.power > secondPlayer.power) {
        firstPlayer.wins += 1;
        return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`;
      }
      if (secondPlayer.power > firstPlayer.power) {
        secondPlayer.wins += 1;
        return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`;
      }
      return `There is no winner.`;
    } else {

      let firstPlayer = this.listOfParticipants.find(
        (x) => x.name == participant1
      );
      if(!firstPlayer){
        throw new Error(`Invalid entered name/s.`);
      }else{
        firstPlayer.power += 20;
        return `The ${participant1} successfully completed the game ${typeOfGame}.`;
      }
    }
  }
  toString() {
    let result = [];
    result.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );
    this.listOfParticipants = this.listOfParticipants.sort(
      (a, b) => b.wins - a.wins
    );

    for (const player of this.listOfParticipants) {
      result.push(
        `${player.name} - ${player.condition} - ${player.power} - ${player.wins}`
      );
    }
    return result.join("\n");
  }
}





// const SummerCamp = result;
let camp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");

console.log(camp.registerParticipant("Petar Petarson", "child", 300));
//  "The Petar Petarson was successfully registered.");

console.log(camp.registerParticipant("Sara Dickinson", "child", 200));
// , "The Sara Dickinson was successfully registered."

console.log(camp.timeToPlay("Battleship", "Sara Dickinson"));
// "The Sara Dickinson successfully completed the game Battleship.");

console.log(
  camp.timeToPlay("WaterBalloonFights", "Sara Dickinson", "Petar Petarson")
);
//  "The Sara Dickinson is winn,er in the game WaterBalloonFights.");

console.log(camp.toString());
// ,`Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Sara Dickinson - child - 120 - 1
// Petar Petarson - child - 100 - 0`);
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());

// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0
