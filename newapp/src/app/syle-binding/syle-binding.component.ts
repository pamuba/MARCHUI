import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syle-binding',
  template: `
              <h2 [style.color]=" hasError ? 'red' : 'orange'">Style Binding</h2>
              <h2 [style.color]="highlightColor">Style Binding</h2>
              <h2 [ngStyle]="titleStyle">Style Binding</h2>
            `,
  styleUrls: ['./syle-binding.component.css']
})
export class SyleBindingComponent implements OnInit {

  public hasError = true;
  public highlightColor = "orange";
  public titleStyle = {
    color:"blue",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
