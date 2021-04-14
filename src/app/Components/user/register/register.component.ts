import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from 'src/app/common/global-constants';
import { Userprofile } from 'src/app/model/classes/userprofile';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';
import { Useraccount } from './../../../model/interfaces/useraccount';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loginUser:Userprofile=new Userprofile();
  AccountType:string;
  is_staff2:string;
  constructor( private fb: FormBuilder,private _apiserv:ApiservicesService,private _global:Globals,
    private router: Router ) {

  }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
    UserName: ['', [Validators.required]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.min(3)]],
    ConfirmPassword: ['', [Validators.required, Validators.min(3)]]
   });
  }

  //register new user
    register(){
      console.log(this.AccountType);

      if(localStorage.getItem("loginuser") != null){
        localStorage.removeItem('loginuser');
      }

      var formvalue = this.registerForm.value
      if (this.AccountType == "customer"){
        this.is_staff2="false"
      }
      else{
          this.is_staff2="true"
      }

      // form value
      var userObject ={
        username:formvalue['UserName'],
        email:formvalue['Email'],
        password:formvalue['Password'],
        is_staff:this.is_staff2,
      };

      this._apiserv.registeruser(userObject).subscribe((res)=>{
        //store in localStorage
        console.log("user registerd",res)
        var username= res['user']['username']
        var email= res['user']['email']
        var id= res['user']['id']
        var token=res['token']
        var is_staffdata=res['user']['is_staff']

        var localData={
          username:username,
          email:email,
          id:id,
          token:token,
          is_staff:is_staffdata,
        }
        localStorage.setItem("loginuser", JSON.stringify(localData));
        // console.log('user data is ',username,email,id)

        this.router.navigate(['/Home'])
      },
      (err)=>{
        console.log(err)
      })
    }



}


      // var  data = JSON.parse(localStorage.getItem("loginuser"));
        // var name= data['name']
        // console.log(`user name2 is${name}`)
        // console.log(`user data is${data}`)
// localStorage.setItem("loginuser", JSON.stringify(userObject));
