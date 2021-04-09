import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
  constructor( private fb: FormBuilder) {}


  ngOnInit(): void {
    this.registerForm = this.fb.group({
    UserName: ['', [Validators.required]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.min(3)]],
    ConfirmPassword: ['', [Validators.required, Validators.min(3)]]
   });
  }
    register(){
      console.log(this.registerForm.value)
    }


}
