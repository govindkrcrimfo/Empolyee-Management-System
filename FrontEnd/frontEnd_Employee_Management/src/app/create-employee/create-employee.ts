import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {
  constructor(private employeeService: EmployeeService, private route:Router){}

  employee: Employee = new Employee();

  onSubmit() {
    this.addEmployee();
    console.log(this.employee);
  }

addEmployee(){
  console.log("inside add employee");
  this.employeeService.createEmployee(this.employee).subscribe(data=>{
     console.log(data);
      this.gotoEmployeeList();
    })
  }

gotoEmployeeList(){
    this.route.navigate(['/employees']);
  }
}
