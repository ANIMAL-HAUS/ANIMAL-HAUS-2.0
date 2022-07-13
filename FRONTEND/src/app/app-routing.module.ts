import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLoginComponent } from './component/all-login/all-login.component';
import { ContractorProfileComponent } from './component/contractor-profile/contractor-profile.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GroomingComponent } from './component/grooming/grooming.component';

import { RegisterComponent } from './component/register/register.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'component/dashboard', component: DashboardComponent },
  {path: 'component/register', component:RegisterComponent},
  
  {path: 'component/contractor-profile', component: ContractorProfileComponent},
  // {path: 'grooming', component: GroomingComponent},
  
  {path: 'component/all-login', component: AllLoginComponent},
  {path: 'component/cart', component: GroomingComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
