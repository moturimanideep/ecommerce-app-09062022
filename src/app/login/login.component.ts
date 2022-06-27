import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: any = {
    email: "digital-lync@gmail.com",
    password: "Login!23",
  }
  constructor() { }

  ngOnInit(): void {
  }
  loginCTA(loginForm: NgForm) {
    console.log(loginForm.value);
  }
}
