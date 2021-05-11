import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  template: `
    <div class="container">
    <p>
      {{message}}
    </p>
      <ng-content select="h1"></ng-content>
      <p>{{greetText}}</p>
      <ng-content select="button"></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class GreetComponent implements OnInit {

  @Input() message:string;
  greetText = "Welcome to our application!"
  constructor() { }

  ngOnInit(): void {
  }

}
