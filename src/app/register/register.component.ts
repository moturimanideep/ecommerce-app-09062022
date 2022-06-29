import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    phone: ['', [Validators.required]],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get formInstance() {
    return this.registerForm.controls;
  }
  registerCTA() {
    console.log(this.registerForm)
  }

}