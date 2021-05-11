import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <p>
      {{ data | lowercase}}<br>
      {{ data | uppercase}}<br>
      {{ data | titlecase}}<br>
      {{ data | slice:3:5}}<br>

      {{ 5.678 | number:'1.2-3'}}<br>
      {{ 5.678 | number:'3.4-5'}}<br>
      {{ 5.678 | number:'3.1-2'}}<br>
      {{ 5.678 | currency}}<br>
      {{ 5.678 | currency:'EUR'}}<br>

      {{ date | date:'short'}}<br>
      {{ date | date:'shortDate'}}<br>
      {{ date | date:'shortTime'}}<br>

    </p>
  `,
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  constructor() { }

  date = new Date()
  public data = "hello HOW ru";

  ngOnInit(): void {
  }

}
