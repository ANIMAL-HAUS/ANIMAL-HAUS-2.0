import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Users, Role } from 'src/app/models/Users';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  userName!: string;
  password!:string;
  userRole!: Role;
  email!: string;
  address!: string;
  aboutMe!: string;

  users= {
    firstName: String,
  lastName: String,
  userName: String,
  password:String,
  userRole: Role,
  email: String,
  address: String,
  aboutMe: String,
  }
  
  // @Input()
   user!: Users;
   role!: Role;
  

  @Output()
  userAddedEvent = new EventEmitter();

  // message!: string;
  // password!: string;

  constructor(private ServicesService: ServicesService,
    private router: Router) { }

  ngOnInit(): void {

    this.user = new Users();
    console.log('user:', this.user);

    
    

    console.log('role:', Role);

  }
  addCustomer() {

    this.ServicesService.addCustomer(this.user).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['component']);
      }
    );
  }
}
