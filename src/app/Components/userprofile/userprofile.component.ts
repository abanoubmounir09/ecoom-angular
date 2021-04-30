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
  check_is_staff:Boolean;
  constructor(private _apiServe: ApiservicesService)
   {
    if(localStorage.getItem("loginuser") != null){
      var data = JSON.parse(localStorage.getItem("loginuser"));
      this.loginUser.email=data['email']
      this.loginUser.username=data['username']
      this.loginUser.id=data['id']
      this.loginUser.is_staff=data['is_staff']
      this.loginUser.token=data['token']
      if (data['is_staff']==true && data['is_staff'] != null){
        this.check_is_staff=true
      }
      else{
        this.check_is_staff=false
      }
    }
    else{
      this.check_is_staff=true
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
    // this.getUser()
    if( this.check_is_staff){
      this._apiServe.getOwnerProduct().subscribe((res)=>{
        this.data = res;
        console.log("details",res[0].PRDName)
      },
      (err)=>{
        console.log(err)
      })
    }
    else{
      this._apiServe.getFavoriteItems().subscribe((res)=>{
        this.data = res;
        console.log("details",res[0].PRDName)
      },
      (err)=>{
        console.log(err)
      })
    }

  }

  deletFavoriteItem(itemId){

    this._apiServe.deletFavoriteItem(this.loginUser.id,itemId).subscribe((res) => {
          }, (err) => { console.log(err) })
          window.location.reload();
  }




}
