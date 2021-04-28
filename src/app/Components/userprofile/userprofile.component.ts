import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interfaces/product';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';
import { Userprofile } from 'src/app/model/classes/userprofile';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data: Product[]
  loginUser:Userprofile=new Userprofile();
  imgDirectory:any= "http://127.0.0.1:8000";
  constructor(private _apiServe: ApiservicesService)
   {
    if(localStorage.getItem("loginuser") != null){
      var data = JSON.parse(localStorage.getItem("loginuser"));
      this.loginUser.email=data['email']
      this.loginUser.username=data['username']
      this.loginUser.id=data['id']
      this.loginUser.is_staff=data['is_staff']
      this.loginUser.token=data['token']
    }
   }


   getUser()
   {
    if(localStorage.getItem("loginuser") != null){
      var data = JSON.parse(localStorage.getItem("loginuser"));
      this.loginUser.email=data['email']
      this.loginUser.username=data['username']
      this.loginUser.id=data['id']
      this.loginUser.is_staff=data['is_staff']
      this.loginUser.token=data['token']
    }
   }

  ngOnInit(): void {
    this.getUser()

    this._apiServe.getOwnerProduct().subscribe((res)=>{
      this.data = res;
      console.log("details",res[0].PRDName)
    },
    (err)=>{
      console.log(err)
    })
  }


}
