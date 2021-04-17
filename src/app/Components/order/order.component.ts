import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userprofile } from 'src/app/model/classes/userprofile';
import { Order } from 'src/app/model/interfaces/order';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:Order;
  loginUser:Userprofile=new Userprofile();
  check_is_staff: boolean;
  constructor(private _apiPrdServ: ApiservicesService, private _router: Router,private _activedRoute:ActivatedRoute)
   {
    this.order = {
      PRDName: "",
      PRDCategory: "",
      PRDDesc: "",
      PRDImage:null,
      PRDPrice:null,
      PRDCost:null,
      PRDDiscountPrice:null,
      PRDCreatedNow:""
      
      
    }
    }

  ngOnInit(): void 
  {
    
    // let id = this._activedRoute.snapshot.params['pid']
    // console.log('ssss')
    // console.log(id)
    // this._apiPrdServ.addtocard(
    //   id).subscribe((res) => {
    //     console.log(res)
        
    //   }, (err) => { console.log(err) })

    if(localStorage.getItem("loginuser") != null){
      var data = JSON.parse(localStorage.getItem("loginuser"));
      this.loginUser.email=data['email']
      this.loginUser.username=data['username']
      this.loginUser.id=data['id']
      this.loginUser.is_staff=data['is_staff']
      if (data['is_staff']==true){
        this.check_is_staff=true
      }
      else{
        this.check_is_staff=false
      }
      console.log("staff is ", this.check_is_staff)
    }
    this._apiPrdServ.mycard(
      this.loginUser.id).subscribe((res) => {
          console.log(res)
          
         }, (err) => { console.log(err) })
  }

}
