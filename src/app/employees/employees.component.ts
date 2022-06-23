import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any = [
    {
      id: 1,
      name: 'Aravind',
      designation: 'Manager',
    },
    {
      id: 2,
      name: 'Charan',
      designation: 'Team Leader',
    },
    {
      id: 3,
      name: 'Eshwar',
      designation: 'Software Engineer',
    },
    {
      id: 4,
      name: 'Roshan',
      designation: 'Software Engineer',
    }
  ];
  selectedEmployee: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  getEmployee(employee: any) {
    console.log(employee);
    this.selectedEmployee = employee
  }

}
