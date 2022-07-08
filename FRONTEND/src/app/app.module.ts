import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { ContractorProfileComponent } from './component/contractor-profile/contractor-profile.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterCustomerComponent } from './component/register-customer/register-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { GroomingComponent } from './component/grooming/grooming.component';
import { LoginComponent } from './component/login/login.component';
import { AllLoginComponent } from './component/all-login/all-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ContractorProfileComponent, 
    
    RegisterCustomerComponent,
    DashboardComponent,
    HeaderComponent,
    GroomingComponent,
    LoginComponent,
    
    RegisterCustomerComponent,
    AllLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'component/register', component:RegisterComponent},
  {path: 'component/register-customer', component:RegisterCustomerComponent},
  {path: 'component/contractor-profile', component: ContractorProfileComponent},
  
  {path: 'dashboard', component: DashboardComponent},

    ]),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
