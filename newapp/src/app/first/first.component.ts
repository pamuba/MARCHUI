import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `<h1>Inline HTML</h1>
             <p>Hello {{name}}</p>
             <p>{{name.length}}</p>
             <p>{{name.toUpperCase()}}</p>
             <p>{{hello()}}</p>`,
  styles: []
})
export class FirstComponent implements OnInit {


  public name = "John"
  constructor() { }

  ngOnInit(): void {
  }
  hello(){
    return "Hello " + this.name;
  }

}
