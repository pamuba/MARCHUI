import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  
  constructor(private http:HttpClient) { }

  registerUser(user){
    console.log("Inside Service")
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  //check token in local storage
  //helper fn for auth gaurd
  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
