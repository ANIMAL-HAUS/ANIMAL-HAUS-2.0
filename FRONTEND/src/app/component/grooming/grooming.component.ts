import { Component, OnInit } from '@angular/core';
import { Users, UserRole } from 'src/app/models/Users';

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

  constructor() { }

  ngOnInit(): void {
  }

}
