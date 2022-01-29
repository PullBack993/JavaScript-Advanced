function solution() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }
  class SocialMediaPost extends Post {
    constructor(title, content, like, dislike) {
      super(title, content);
      this.like = like;
      this.dislike = dislike;

      this.comments = [];
    }
    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      if (this.comments.length > 0) {
        let reuslt = [];
        for (let i = 0; i < this.comments.length; i++) {
          reuslt.push(` * ${this.comments[i]}`);
        }

        return (
          super.toString() +
          `\nRating: ${this.like - this.dislike}\n` +
          `Comments:\n` +
          `${reuslt.join("\n")}`
        );
      } else {
        return super.toString() + `\nRating: ${this.like - this.dislike}`;
      }
    }
  }
  
  class BlogPost extends Post {
    constructor(title, comment, views) {
      super(title, comment);
      this.views = views;
    }
    view() {
      this.views++;
      return this;
    }

    toString() {
      return super.toString() + `\nViews: ${this.views}`;
    }
  }
  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
