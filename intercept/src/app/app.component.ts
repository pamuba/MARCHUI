import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intercept';

  constructor(private http:HttpClient){
   
    }
    ngOnInit(){
      this.http.get('https://jsonplaceholder.typicode.com/users')
             .subscribe(data => {

    });
    this.http.get('https://jsonplaceholder.typicode.com/posts/2')
             .subscribe(data => {

    });
    this.http.get('https://jsonplaceholder.typicode.com/comments')
             .subscribe(data => {

    });
  }
}
