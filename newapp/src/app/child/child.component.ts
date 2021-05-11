import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      {{"Hello !!!" + parentData}}
    </p>
    <button (click)="fireEvent()">SendEvent</button>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  fireEvent(){
    this.childEvent.emit("The data from the child")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
