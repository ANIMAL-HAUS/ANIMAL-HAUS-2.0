import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Headers' : 'Content-type: application/json',
    'Access-Control-Allow-Methods' : 'POST',
    'Access-Control-Allow-Origin' : '*'
  })
};


@Component({
  selector: 'app-all-login',
  templateUrl: './all-login.component.html',
  styleUrls: ['./all-login.component.css']
})
export class AllLoginComponent implements OnInit {

  // user_id!: Number;
  username!: string;
  password!: String;
  result!: boolean;
  // user = {username : String, password:String};
  Credentials = {withCredentials: true};
  response : any;
  msgError = "";
  usrid : any;
  user = {username : String, password: String};
  constructor(private _http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  Loginuser()
  {
    let user = {
                username : this.username,
                password : this.password
              };
    let Credentials = {withCredentials:true};
    // console.log(this.user_id);
    console.log(this.username);
    console.log(this.password); 
    console.log(this.user);
    console.log(Credentials);

    let response = this._http.post<any>("http://localhost:5000/petgrooming/authcontroller/login",user,httpOptions).subscribe(
      {
        next : (v) =>  this.router.navigate([/**'/products??'*/]),
        error : (e) => this.msgError = "Invalid Credentials, Please Enter a valid user name or password",
        complete: () =>  window.localStorage.setItem("username",(this.username))
      }
      );
  }
}
