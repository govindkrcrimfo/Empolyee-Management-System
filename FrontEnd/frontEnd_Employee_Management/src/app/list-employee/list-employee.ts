import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.html',
  styleUrl: './list-employee.css',
})
export class ListEmployee {

  constructor(private employeeService: EmployeeService) { }

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
}
