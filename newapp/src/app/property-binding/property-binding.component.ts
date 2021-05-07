import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<input [id]="myId"  type="text" value="John">
            <input [disabled]="false" id="{{myId}}"  type="text" value="John">`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  public myId = "testId"

  ngOnInit(): void {
  }

}
