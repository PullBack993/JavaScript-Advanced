class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
    this._replies = []
    this._counter = 1;
  }
  get likes() {
    if (this._likes.length == 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length == 1) {
      return `${this._likes[0]} likes this story!`; // user ?
    } else {
      return `${this._likes[0]} and ${this._likes.length-1} others like this story!`;
    }
  }
  like(name) {
    if (this._likes.includes(name)) {
      throw Error("You can't like the same story twice!");

    } else if (this.creator == name) {
      throw Error("You can't like your own story!");

    } else {
      this._likes.push(name);
      return `${name} liked ${this.title}!`;
    }
  }

  dislike(name) {
    if (!this._likes.includes(name)) {
      throw Error("You can't dislike this story!");
    } else {
      this._likes = this._likes.filter(function(n) { return n !== name })
      return `${name} disliked ${this.title}`;
    }
  }
  comment(username, content, id) {
    let checkId = false
    for (const comment in this._comments) {
      if ( this._comments[comment].id === id){
        checkId = true
        break
      }
    }
    
    if (id === undefined || !checkId) {
      this._comments.push({
        username: username,
        content: content,
        id: this._counter,
        replies: []
      });
      this._counter++;
      return `${username} commented on ${this.title}`;
    }

    if (checkId){
      let find = this._comments.filter(x => x.id == id)[0]
      let currentId = Number(find.id) + Number(((find.replies.length+1) / 10))

      find.replies.push({
        id:id,
        username:username,
        content:content,
        replies: currentId
      })
      return "You replied successfully"
      
    }
  }

  toString(sortingType){
    
      let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, 'Comments:']
      let sorting = {
        asc: (a,b) => a.id - b.id,
        desc: (a,b) => b.id - a.id,
        username: (a,b) => a.username.localeCompare(b.username)
      }
      if (this._comments){
        this._comments.sort(sorting[sortingType]).forEach(e => {
          result.push(`-- ${e.id}. ${e.username}: ${e.content}`)
          if(e['replies']){
            e.replies.sort(sorting[sortingType]).forEach(r => result.push(`--- ${r.replies.toFixed(1)}. ${r.username}: ${r.content}`))
          }
        })
      }else{
        return result.join('\n')
      }
      
      
    
    return result.join('\n')
  }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));



