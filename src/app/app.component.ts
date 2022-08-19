import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = {
    title: 'angular-univ',
    description: 'hi my name is angu',
  };
  onButtonClick() {
    alert('hello world');
  }
  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
