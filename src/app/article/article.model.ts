

/* This class will be used by the ArticleComponent so that the properties are not directly saved to the component. The properties will be stored on an instance of the Article class. 
    1. Creating a new class that represents an Article. THIS IS JUST A CLASS NOT A COMPONENT!
    2. When creating an Article, we need the title and the link, but the votes is optional (denoted by the "?") and defaults to 0.
    3.  votes - a numer representing the sum of all upvotes, minus the downvotes.
        title - a string holding the title of the article.
        link - a string holding the URL of the article.
    4. Moved the vote up and down logic to the model and used the domain utility. 
        - We want the componets to be simple and do minimum work and the models to do the heavy lifting. 
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
    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }
    // domain() is a utility function that extracts the domain from a URL.
    domain(): string {
        try {
            // e.g http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (error) {
            return null;
        }
    }
}
