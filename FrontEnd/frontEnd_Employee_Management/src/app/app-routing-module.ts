import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployee } from './list-employee/list-employee';

const routes: Routes = [
  {path:'employees',component:ListEmployee},
  {  path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
