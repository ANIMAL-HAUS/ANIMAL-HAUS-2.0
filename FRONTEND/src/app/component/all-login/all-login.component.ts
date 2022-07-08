import { Users } from 'src/app/models/Users';
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
  userName!:string;
  password!:string;
  result!:boolean;
  User ={userName:String, password:String};
  Credentials = {withCredentials:true};
  response:any;
  msgError="";

  constructor(private _http : HttpClient, private router : Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    let User ={userName:this.userName,
                password:this.password,
                

              };
    let Credentials = {withCredentials:true};
    console.log(this.userName);
    console.log(this.password);
    console.log(User);
    console.log(Credentials);

    
      let response = this._http.post<any>("http://localhost:5000/petgrooming/authcontroller/login",
    Users, httpOptions).subscribe({
      next:(_v:1) => this.router.navigate(['component/register']),
      error:(_e:0) => console.error(this.msgError="Invalid Credentials, Please Enter a Valid User Name and/or Password"),
      complete: () => window.localStorage.setItem("userName", this.userName)
    });
  }
}
