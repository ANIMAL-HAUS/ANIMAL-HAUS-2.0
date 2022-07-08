import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Role, Users } from '../../models/Users';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-contractor-profile',
  templateUrl: './contractor-profile.component.html',
  styleUrls: ['./contractor-profile.component.css']
})
export class ContractorProfileComponent implements OnInit {
  
  users!: Array<Users>;
  role!: Array<Role>;
  action!: string;

  selectedUser!: Users;


  constructor(private ServicesService: ServicesService ,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.ServicesService.getContractors().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedUserId = params['id'];
        if (selectedUserId) {
        }
      }
    );
  }
  
  viewContractor(id: number) {
    this.router.navigate(['component', 'contractor-profile'], {queryParams : {id, action: 'view'}});
  }

  handleSuccessfulResponse(response: Users[]) {
    this.users = response;
    console.log(this.users);
  }

  addContractor() {
    this.selectedUser = new Users();
    this.router.navigate(['component', 'contractor-profile'], { queryParams: { action: 'add' } });
  }

}
