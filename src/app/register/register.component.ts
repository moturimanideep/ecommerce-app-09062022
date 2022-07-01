import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    email: ''
  }
  registerForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(6)]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    password: ['', Validators.required]
  });
  message: any = '';
  constructor(private fb: FormBuilder, private restService: RestService, private router: Router) { }

  ngOnInit(): void {
  }
  get formInstance() {
    return this.registerForm.controls;
  }
  registerCTA() {
    this.message = undefined;
    console.log(this.registerForm);
    this.restService.registerUser(this.registerForm.value).subscribe((res: any) => {
      if (res.data && res.data.token) {
        localStorage.setItem('ec-token', res.data.token);
        localStorage.setItem('ec-userId', res.data.userId);
        this.router.navigate(['/']);
      }
    }, (err: any) => {
      if (err.error && err.error.errorDescription) {
        this.message = err.error.errorDescription;
      }
      console.log(err);
    });
  }

}