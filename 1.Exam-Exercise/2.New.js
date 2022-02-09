class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }
  addArticle(model, name, quantity) {
    model = model.toLowerCase();
    quantity = Number(quantity);

    if (!this.possibleArticles.hasOwnProperty(model)) {
      throw new Error("This article model is not included in this gallery!");
    }
    let findName = this.listOfArticles.find(
      (x) => x.name == name && x.model == model
    );

    if (findName) {
      findName.quantity += quantity;
    } else {
      let newArticle = { model: model, name: name, quantity: quantity };
      this.listOfArticles.push(newArticle);
    }
    return `Successfully added article ${name} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let inviteGuest = this.guests.find((x) => x.name == guestName);
    if (inviteGuest) {
      throw new Error(`${guestName} has already been invited.`);
    }
    let points = 0;
    if (personality == "Vip") {
      points = 500;
    } else if (personality == "Middle") {
      points = 250;
    } else {
      points = 50;
    }

    let creatGuest = { name: guestName, points: points, purchaseArticle: 0 };
    this.guests.push(creatGuest);
    return `You have successfully invited ${guestName}!`;
  }
  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find(
      (x) => x.name === articleName && x.model === articleModel
    );
    if (!article) {
      throw new Error("This article is not found.");
    }
    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }
    let findGuest = this.guests.find((x) => x.name === guestName);
    if (!findGuest) {
      return "This guest is not invited.";
    }
    if (findGuest.points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    }
    findGuest.points -= this.possibleArticles[articleModel];
    findGuest.purchaseArticle += 1;
    article.quantity -= 1;

    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }

  showGalleryInfo(criteria) {
    let result = [];
    if (criteria == "article") {
      result.push("Articles information:");
      for (const article of this.listOfArticles) {
        result.push(`${article.model} - ${article.name} - ${article.quantity}`);
      }
    } else {
      result.push("Guests information:");
      for (const guest of this.guests) {
        result.push(`${guest.name} - ${guest.purchaseArticle}`);
      }
    }
    return result.join("\n");
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));
