import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ParentComponent implements OnInit {

  title = "Parent Component"
  constructor() { }

  ngOnInit(): void {
  }

}
