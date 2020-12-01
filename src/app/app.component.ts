import { Component } from '@angular/core';
import {Article} from './article/article.model';
/* 
  1. Creating the addArticle function that takes two parameters title and link which have types of input elements. 
    - title and link are OBJECTS with type and are NOT the input values directly.
    - The function is connected to the click event on the button on the form in app.comp.html
    - We use string interpolation in the console.log statement. 
    - Need to add parameters to the input elements so function can use them.
  2. Articles[] -> articles is an Array of Articles. The collection (the array) is typed. the Array is a collection that will only hold objects of type Article. 
    - We populate the array in the constructor using this.articles, new Article 
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }
}
