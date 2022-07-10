import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRole, Users } from '../../models/Users';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit {
  users!: Array<Users>;
  role!: Array<UserRole>;
  action!: string;

  selectedUser!: Users;


  constructor(private ServicesService: ServicesService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.ServicesService.getContractors()
   .subscribe(res=>{
     this.users = res;
   })
   console.log(this.users);
  }
  
}