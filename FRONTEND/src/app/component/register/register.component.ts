
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {Days, TimeofDay, Users } from '../../models/Users';
import {UserRole } from '../../models/Users';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  firstName!: any;
  lastName!: any;
  userName!: any;
  password!:any;
  role!: UserRole;
  email!: any;
  
  city!: any;
  aboutMe!: any;
  user!: Users;
  Credentials = {withCredentials:true};
  @Input()
  //user!: Users;
  userRole!: UserRole;
  

  @Output()
  userAddedEvent = new EventEmitter();

  // message!: string;
  // password!: string;

  constructor(private ServicesService: ServicesService,
    private router: Router, private _http : HttpClient) { }

  ngOnInit(): void {
    
    this.user = new Users();
    console.log('user:', this.user);

    
   

    console.log('userRole:', UserRole);
  }

  addContractor() {
    
    this.user= {
      id:0,
      userName: this.firstName,
      password: this.password,
      role: this.role,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      address: this.city,
      aboutMe: this.aboutMe,
      time: 0,
      day: 0
};
// if (this.user.aboutMe == null){
//   alert("Please enter something in about me.");
//   console.log(this.user.aboutMe);
// }
//  if(this.user.city == null){
//   alert("Please enter something in city.");
// }
// else if(this.user.email == "johndoe@example.com"){
//   alert("Please enter something in email address.");
// }
// else if(this.user.firstName == null){
//   alert("Please enter something in first name.");
// }
// else if(this.user.lastName == null){
//   alert("Please enter something in last name.");
// }
// else if(this.user.password == null){
//   alert("Please enter something in password.");
// }
// else if(this.user.userName == null){
//   alert("Please enter something in username.");
// }
// else{
console.log(this.user.email);
// let response = this._http.post("http://localhost:5000/petgrooming/authcontroller/contractormorningweekends",
// this.user).toPromise().then( ( data:any) =>{//console.log(data);
//   this.user = data;
//   console.log(this.user);
  
  
//     this.router.navigate(['component/contractor-profile']);
//     sessionStorage.setItem("aboutMe",this.user.aboutMe);
//   }
// )
  
  }
}
