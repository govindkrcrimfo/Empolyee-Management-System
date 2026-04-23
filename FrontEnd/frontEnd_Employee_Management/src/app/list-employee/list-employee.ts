import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.html',
  styleUrl: './list-employee.css',
})
export class ListEmployee {

  constructor(private employeeService: EmployeeService,private route:Router) { }

  employeesList: Employee[] = [];
  //this hook will call when component start
  ngOnInit(): void {
    this.getEmployeeList();
  }


  private getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employeesList = data;
    })
  }

  updateEmployee(id:number){
      this.route.navigate(['updateEmployee',id])
    }
  deletEmployee(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe(data=>{
      this.getEmployeeList();
      });
    }

viewEmployee(id:number){
  this.route.navigate(['employeeDetails',id]);
  }

}
