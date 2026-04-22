import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css',
})
export class UpdateEmployee {
  constructor(private employeeService:EmployeeService,private activateRoute:ActivatedRoute,private route:Router){}
   id:number=0;
   employee : Employee=new Employee();
   /*
    when click on update , update component will be laoded ,
    and ngOnInit will load and fetch id form url/params and then call get getEmployeeById
    this id and employee will be required to updateEmployeeById
   */
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
     console.log("ID:", this.id);
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      console.log("emp data:", data);
      this.employee=data});
    }
  onSubmit(){
       this.employeeService.updateEmployeeById(this.id,this.employee).subscribe(data=>{
       this.employee=data;
         this.gotoEmployeeList();
       });
    }
  gotoEmployeeList(){
      this.route.navigate(['/employees']);
    }
}
