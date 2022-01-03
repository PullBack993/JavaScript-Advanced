function cards(arr) {
  const validCardFace = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: "J",
    Q: "Q",
    K: "K",
    A: "A",
  };
  const validCardSuit = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };

  const checker = (validCard, inputValue, currentCard) => {
    if (!validCard[inputValue]) {
      console.log(`Invalid card: ${currentCard}`);
      return;
    }
    return validCard[inputValue];
  };
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let splitData = arr[i].split("");
    let suitCard = splitData.pop([splitData.length - 1]);
    let faceCard = splitData.join("");

    let [face, suit] = [
      checker(validCardFace, faceCard, arr[i]),
      checker(validCardSuit, suitCard, arr[i]),
    ];
    if (face === undefined || suit === undefined) return;
    
    result.push(`${face}${suit}`);
  }
  console.log(result.join(" "));
}

cards(["10D", "KH", "2C"]);
cards(["5S", "3D", "QD", "1C"]);
cards(["AS", "10D", "KH", "2C"]);
