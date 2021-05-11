import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public num = 9999;
  public num1 = 9999;

  public fn(){
    this.num++;
  }

  public fn1(){
    this.num1++;
  }
}
