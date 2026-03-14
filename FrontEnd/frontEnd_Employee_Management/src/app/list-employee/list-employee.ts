import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.html',
  styleUrl: './list-employee.css',
})
export class ListEmployee {
    title="Employees Details List :-"
    employees:Employee[]=[];

    ngOnInit():void{
      this.employees=[
        {
          "id":1,
          "firstName":"Govind",
          "lastName":"kumar",
          "salary":95000
        },
         {
          "id":2,
          "firstName":"Ram",
          "lastName":"Ji",
          "salary":9999999999
        }
      ]
    }
}
