import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() myFirstInputParameter: number;
  @Input() mySecondInputParameter: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChange){
    if(this.myFirstInputParameter != undefined)
       this.doSomething(this.myFirstInputParameter);
      
    if(changes.mySecondInputParameter && changes.mySecondInputParameter.currentValue)
      this.doSomething1(this.mySecondInputParameter);
  }
  private doSomething(input:number){
    console.log("First", input);
  }

  private doSomething1(input:number){
    console.log("Second", input);
  }

}
