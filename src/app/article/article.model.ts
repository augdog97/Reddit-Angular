

/* This class will be used by the ArticleComponent so that the properties are not directly saved to the component. The properties will be stored on an instance of the Article class. 
    1. Creating a new class that represents an Article. THIS IS JUST A CLASS NOT A COMPONENT!
    2. When creating an Article, we need the title and the link, but the votes is optional (denoted by the "?") and defaults to 0.
    3.  votes - a numer representing the sum of all upvotes, minus the downvotes.
        title - a string holding the title of the article.
        link - a string holding the URL of the article.

*/

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
}
