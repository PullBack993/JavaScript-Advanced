class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }
  addArticle(articelModel, name, quantity) {
    let model = articelModel.toLowerCase();

    if (!this.possibleArticles.hasOwnProperty(model)) {
      throw Error("This article model is not included in this gallery!");
    }
    const found = this.listOfArticles.some((el) => el.model === model);
    if (found) {
      for (const key in this.listOfArticles) {
        if (this.listOfArticles[key].model === model) {
          this.listOfArticles[key].quantity += Number(quantity);
        }
      }
    } else {
      let article = { model: model, name: name, quantity: quantity };
      this.listOfArticles.push(article);
    }
    return `Successfully added article ${name} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let found = this.guests.some((el) => el.guestName === guestName);
    if (found) {
      throw Error(`${guestName} has already been invited.`);
    } else {
      let points = 0;
      if (personality == "Vip") {
        points = 500;
      } else if (personality == "Middle") {
        points = 250;
      } else {
        points = 50;
      }
      let newRecord = {
        guestName: guestName,
        points: points,
        purchaseArticle: 0,
      };
      this.guests.push(newRecord);
    }
    return `You have successfully invited ${guestName}!`;
  }


  buyArticle(articleModel, articleName, guestName) {
    let hasModel = this.listOfArticles.find((el) => el.model === articleModel);

    if (!hasModel || hasModel.name !== articleName) {
      throw Error("This article is not found.");
    }
    let found = this.guests.some((el) => el.guestName === guestName);
    if (!found) {
      throw Error(`This guest is not invited.`);
    }
    
    const currArt = this.listOfArticles.find(
      (element) => element.name == articleName);

    if (currArt.quantity == 0) {
      return `The ${currArt.name} is not available.`;
    }
    let findGuest = this.guests.find((el) => el.guestName === guestName);
    let guestPoits = findGuest.points;
    let needsPoint = this.possibleArticles[articleModel];
    if (guestPoits < needsPoint) {
      return "You need to more points to purchase the article.";
    } else {
      findGuest.points -= needsPoint;
      findGuest.purchaseArticle += 1;
      hasModel.quantity -= 1;
      return `${guestName} successfully purchased the article worth ${needsPoint} points.`;
    }
  }
  showGalleryInfo(criteria) {
    if (criteria === "article") {
      let result = [];
      result.push("Articles information:");
      for (const key in this.listOfArticles) {
        let mdl = this.listOfArticles[key].model;
        let artName = this.listOfArticles[key].name;
        let qnty = this.listOfArticles[key].quantity;

        result.push(`${mdl} - ${artName} - ${qnty}`);
      }
      return result.join("\n");
    }
    if (criteria === "guest") {
      let result = [];
      result.push("Guests information:");
      for (const key in this.guests) {
        let guestName = this.guests[key].guestName;
        let purchaseArticle = this.guests[key].purchaseArticle;
        result.push(`${guestName} - ${purchaseArticle}`);
      }
      return result.join("\n");
    }
  }
}



let art = new ArtGallery("Curtis Mayfield");

art.addArticle("picture", "Mona Liza", 3);
art.addArticle("Item", "Ancient vase", 2);
art.addArticle("picture", "Mona Liza", 1);

art.inviteGuest("John", "Vip");
art.inviteGuest("Peter", "Middle");

art.buyArticle("picture", "Mona Liza", "John");
art.buyArticle("item", "Ancient vase", "Peter");
console.log(art.showGalleryInfo("article"));
console.log(art.showGalleryInfo("guest"));

// assert.equal(art.showGalleryInfo('article'),`Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1`);

// assert.equal(art.showGalleryInfo('guest'),`Guests information:
// John - 1
// Peter - 1`);
