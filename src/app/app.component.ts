import { Component } from '@angular/core';

/* 
  1. Creating the addArticle function that takes two parameters title and link which have types of input elements. 
    - title and link are OBJECTS with type and are NOT the input values directly.
    - The function is connected to the click event on the button on the form in app.comp.html
    - We use string interpolation in the console.log statement. 
    - Need to add parameters to the input elements so function can use them.
  
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
