import { TimeofDay, Days } from './../../models/Users';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {Users } from '../../models/Users';
import {UserRole } from '../../models/Users';

import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  userName!: string;
  password!:string;
  role!: UserRole;
  email!: string;
  address!: string;
  aboutMe!: string;
  day!: Days;
  time!: TimeofDay;


  // users= {
  //   firstName: String,
  // lastName: String,
  // userName: String,
  // password:String,
  // role: UserRole,
  // email: String,
  // address: String,
  // aboutme: String,
  // }

  @Input()
  user!: Users;
  userRole!: UserRole;
  // time!: TimeofDay;
  // day!:Days
  

  @Output()
  userAddedEvent = new EventEmitter();

  // message!: string;
  // password!: string;

  constructor(private ServicesService: ServicesService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.user = new Users();
    console.log('user:', this.user);

    
    

    console.log('userRole:', UserRole);
  }

  addContractor() {

    

    
    this.ServicesService.addContractor(this.user).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['component', 'contractor-profile']);
      }
    );
    }
  }
 

