import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syle-binding',
  template: `
              <h2 [style.color]=" hasError ? 'red' : 'orange'">Style Binding</h2>
              <h2 [style.color]="highlightColor">Style Binding</h2>
              <h2 [ngStyle]="titleStyle">Style Binding</h2>
              <button (click)="onClick($event)">Click Me!</button>
              <button (click)="greeting='value without any handler'">Click Me!</button>

              {{greeting}}

              <hr>
              <input type="text" #myInput/>
              <button (click)="func(myInput.value)">Click</button>
            `,
  styleUrls: ['./syle-binding.component.css']
})
export class SyleBindingComponent implements OnInit {

  public func(msg){
    console.log(msg)
  }
  public greeting=""

  public hasError = true;
  public highlightColor = "orange";
  public titleStyle = {
    color:"blue",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event)
    this.greeting = event.type
  }

}
