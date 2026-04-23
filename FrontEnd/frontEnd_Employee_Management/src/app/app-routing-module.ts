import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployee } from './list-employee/list-employee';
import { CreateEmployee } from './create-employee/create-employee';
import {UpdateEmployee } from './update-employee/update-employee';
import {EmployeeDetails } from './employee-details/employee-details';
const routes: Routes = [
  { path: 'employees', component: ListEmployee },
  { path: 'createEmployee', component: CreateEmployee },
  {path:'updateEmployee/:id',component:UpdateEmployee},
  {path:'employeeDetails/:id',component:EmployeeDetails},
  { path: '', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
