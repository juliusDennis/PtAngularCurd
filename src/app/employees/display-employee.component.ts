import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  private selectedEmployeeId: number;
  confirmDelete = false;
 

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _deleteEmployee: EmployeeService) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  viewEmployee() {
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }
  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }
  deleteEmployee() {
    this._deleteEmployee.deleteEmployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }
}