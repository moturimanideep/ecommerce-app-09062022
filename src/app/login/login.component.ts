import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  date: any = new Date();
  num: any = 5.12345678;
  formData: any = {
    email: "digital-lync@gmail.com",
    password: "Login!23",
  }
  message: any;
  constructor(
    private restService: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.date);
  }
  loginCTA(loginForm: NgForm) {
    this.message = undefined;
    console.log(loginForm.value);
    this.restService.loginUser(loginForm.value).subscribe((res: any) => {
      if (res.data && res.data.token) {
        localStorage.setItem('ec-token', res.data.token);
        localStorage.setItem('ec-userId', res.data.userId);
        this.router.navigate(['/']);
      }
      console.log(res);
    }, (err: any)=> {
      if (err.error && err.error.errorDescription) {
        this.message = err.error.errorDescription;
      }
      console.log(err);
    });
  }
}
