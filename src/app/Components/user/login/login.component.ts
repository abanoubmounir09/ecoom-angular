import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';
import { Router } from '@angular/router';
import { Userprofile } from 'src/app/model/classes/userprofile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  test:string;
  loginUser:Userprofile=new Userprofile();
  constructor( private fb: FormBuilder,private _apiServe:ApiservicesService,private router: Router ) { }

  ngOnInit(): void {
    // var  data = JSON.parse(localStorage.getItem("loginuser"));
    // var name= data['name']
    this.loginForm = this.fb.group({
    UserName: ['', [Validators.required]],
    // Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.min(3)]]
     });
    }

    // tslint:disable-next-line: typedef
    login()
    {
        // form value
      let formValue=this.loginForm.value
      var userObject ={
        username:formValue['UserName'],
        password:formValue['Password'],

      };

      this._apiServe.loginUser(userObject).subscribe((res)=>{
        console.log(res)
        // console.log("data ///****",res['data'])
        var username= res['data']['username']
        var email= res['data']['email']
        var id= res['data']['id']
        var token=res['data']['token']
        var is_staffdata=res['data']['is_staff']
          console.log("username",username)
        var localData={
          username:username,
          email:email,
          id:id,
          token:token,
          is_staff:is_staffdata,
        }

        localStorage.setItem("loginuser", JSON.stringify(localData));

        window.location.href = ('/Home')
        // this.router.navigate(['/Home'])
        // window.location.href(['/Home'])
      },
      (err)=>{
        console.log(err)
      })

}
}
