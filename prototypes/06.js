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
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let supString = super.toString();
            let rating = this.likes - this.dislikes;

            if (this.comments.length > 0) {
                let commText = '';
                for (let index = 0; index < this.comments.length; index++) {
                    commText += `\n * ${this.comments[index]}`
                }
                return `${supString}\nRating: ${rating}\nComments:${commText}`
            } else {
                return `${supString}\nRating: ${rating}`
            }
            //return super.toString() + `\n` +
            //    `Rating: ${this.likes - this.dislikes}` +
            //  (this._comments.length ? '\nComments:' + '\n' + (this._comments.map(c => ` * ${c}`).join('\n')) : '');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 100, 20);
scm.addComment("Good post");
scm.addComment("Very asasasgood post");
scm.addComment("Wow!");
console.log(scm.toString());

let asd = new classes.BlogPost('asd', 'das', 100)
console.log(asd.toString());


// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// *Good post
// * Very good post
// * Wow!