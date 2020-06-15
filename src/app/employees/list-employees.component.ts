import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service'


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  datafromChild: Employee;
  employees: Employee[];
  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  handleNotify(eventData: Employee) {
    this.datafromChild = eventData;
  }

}
