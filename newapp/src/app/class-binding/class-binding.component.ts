import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template:    `<h2>Welcome to Style Binding</h2>
                <h2 class="text-success">Angular 9</h2>
                <h2 [class]="successClass">Angular 9</h2>
                <h2 class="text-special" [class]="successClass">Angular 9</h2>
                <h2 [class.text-danger]="hasError">Angular 9</h2>
                <h2 [ngClass]="messageClasses">Angular 9</h2>`,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {

  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
