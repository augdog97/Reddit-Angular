/* 
  1. Creating 4 properties in the class. 
    - cssClass - the CSS class we want to apply to the "host" of this component. "Host" is the element this component is attached to. Properties on host elements (the tag selector 'article' in this case) can be set by using the "@HostBinding" decorator.
        - In this case we are telling Angular to keep the value of the host elements class to be in sync with the property cssClass. 
  2. Storing a reference to an article. 
        - We have defined the type of article to be our new Article class.
        - @Input decorator allows us to use the data from the Article array in the component by setting the variable to article. 
        - With the vote functions we are not incrementing on the component, but rather we are incrementing votes on the article. 
  3. We are creating the up and down vote function and either increase or decrease this.votes by 1. 
    - Set type of Boolean and have the functions return false. This tells the browser NOT to propagate the event upwards. The page wont reload when the button is clicked.
*/


import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Article} from './article.model';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  constructor() { 
   // article is populate by the Input decorator so nothing needs to go here.
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
