import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import{Users} from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  deleteUser: any;

  constructor(private httpClient:HttpClient) { }
  getContractors()
  {
    return this.httpClient.get<Users[]>('http://localhost:5000/petgrooming/usercontroller/getallcontractors');
  }

  addContractor(newUser: Users) {
    return this.httpClient.post<Users>('http://localhost:5000/petgrooming/authcontroller/contractoranytimeweekends', newUser);   
  }

  getCustomers()
  {
    return this.httpClient.get<Users[]>('http://localhost:5000/petgrooming/usercontroller/getallcustomers');
  }

  addCustomer(newUser: Users) {
    return this.httpClient.post<Users>('http://localhost:5000/petgrooming/authcontroller', newUser);   
  }

  getContractor(){
    return this.httpClient.get<any>('http://localhost:5000/petgrooming/usercontroller/getallcontractors')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
