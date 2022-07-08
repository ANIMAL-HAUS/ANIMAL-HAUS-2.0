import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.httpClient.post<Users>('http://localhost:5000/petgrooming/authcontroller/contractor', newUser);   
  }

  getCustomers()
  {
    return this.httpClient.get<Users[]>('http://localhost:5000/petgrooming/usercontroller/getallcustomers');
  }

  addCustomer(newUser: Users) {
    return this.httpClient.post<Users>('http://localhost:5000/petgrooming/authcontroller', newUser);   
  }

  
}
