import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<any> = [
    {
      id: 1,
      name: 'Dinesh',
      email: 'dinesh@gmail.com',
      city: 'Bangalore'
    },
    {
      id: 2,
      name: 'Karthik',
      email: 'karthik@gmail.com',
      city: 'Hyderabad'
    },
    {
      id: 3,
      name: 'Charan',
      email: 'charan@gmail.com',
      city: 'Bangalore'
    },
    {
      id: 4,
      name: 'Satish',
      email: 'satish@gmail.com',
      city: 'Kolkata'
    },
    {
      id: 5,
      name: 'Akash',
      email: 'akash@gmail.com',
      city: 'Chennai'
    },
    {
      id: 6,
      name: 'Eshwar',
      email: 'eshwar@gmail.com',
      city: 'Chennai'
    },
    {
      id: 7,
      name: 'Manoj',
      email: 'manoj@gmail.com',
      city: 'Delhi'
    }
  ];
  subscriber: any;
  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.subscriber = this.restService.getAllUsers().subscribe((res: any) => {
      this.users = res.users;
    });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
