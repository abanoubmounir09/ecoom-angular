import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.min(3)]]
     });
    }

    // tslint:disable-next-line: typedef
    login() {
    console.log(this.loginForm.value);

}
}
