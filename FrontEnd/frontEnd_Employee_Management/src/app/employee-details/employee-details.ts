import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {
  constructor(private employeeService:EmployeeService,private activateRoute:ActivatedRoute){}
  id:number=0;
  employee:Employee=new Employee();
  ngOnInit(){
    this.id=this.activateRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
          console.log("emp data:", data);
          this.employee=data});
    }

}
