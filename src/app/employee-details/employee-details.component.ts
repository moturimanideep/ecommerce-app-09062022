import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employeeName: string = '';
  @Input() employeeDesignation: string = '';
  @Input() employeeId: number = 0;
  @Output() selectEmployee: any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectedEmployee() {
    this.selectEmployee.emit({
      name: this.employeeName,
      designation: this.employeeDesignation,
      id: this.employeeId
    });
  }

}
