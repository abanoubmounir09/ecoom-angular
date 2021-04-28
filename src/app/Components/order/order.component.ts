import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userprofile } from 'src/app/model/classes/userprofile';
import { Order } from 'src/app/model/interfaces/order';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';
import {render} from 'creditcardpayments/creditCardPayments'
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:Order;
  loginUser:Userprofile=new Userprofile();
  check_is_staff: boolean;
  datap:Order[];
  totalprice:number
  shippingcost:number
  qnumber:[];
 v:number=0;  
 total:number;

 
 imgDirectory:any= "http://127.0.0.1:8000"
 newnum:number
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
      PRDCreatedNow:"",
      PRDQuantity:null
      
      
      


    }
   



    this.totalprice=0

  
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

        this.datap=res['d'];

        
        this.qnumber=res['q']
        // this.datap = res;

        for(let i=0;i<this.datap.length;i++)
        {

          
          this.datap[i][0].PRDPrice=this.datap[i][0].PRDPrice * this.qnumber[i]
          this.totalprice=this.totalprice  + this.datap[i][0].PRDPrice;
        }
        this.total=this.totalprice;
        console.log('totalllllll')
        console.log(this.total)
        render(
          {
            id:"#myPaypalButtons",
            currency:"USD",
            value:String(this.total),
            onApprove:(details) => {
              alert("transaction successfully");
              console.log("transaction successfully")
              this.del_after_buy()
            }
            
            
          }
        )
        this.shippingcost=this.totalprice+10
          console.log("sdsddddddddsdsdddddd")
          console.log(res['q'])
          
          console.log(res)

          }, (err) => { console.log(err) })



          
        //  this._apiPrdServ.getmycard().subscribe((res)=>{
        //   this.datap=res;
        //   console.log(res)
        // },
        // (err)=>{
        //   console.log(err)
        // })

      
  }
  delitem(id)
  { if(localStorage.getItem("loginuser") != null){
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

  }}
    this._apiPrdServ.delitemcard(this.loginUser.id,id).subscribe((res) => {
      this.datap = res;
        console.log("sdsddddddddsdsdddddd")
        console.log(res)

        }, (err) => { console.log(err) })
    console.log(id)
    window.location.reload();
  }
  updatequantity(n:number,id:number)
  {
    if(n>1)
    {
      console.log(n)
      n=n-1;
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
      this._apiPrdServ.delonefromcard(id,
        this.loginUser.id,n).subscribe((res) => {
    
            
            }, (err) => { console.log(err) })
      
            window.location.reload();
  }

  }
  updatequantityadd(n:number,id:number,q:number)
  {
    if (n<q)
    {
    console.log(n)
    n=n+1;
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
    this._apiPrdServ.delonefromcard(id,
      this.loginUser.id,n).subscribe((res) => {
  
          
          }, (err) => { console.log(err) })
    
          window.location.reload();
  }
}
del_after_buy()
{
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


  this._apiPrdServ.del_after_buy(
    this.loginUser.id).subscribe((res) => {

        
        }, (err) => { console.log(err) })
  
        window.location.reload();
}




  refresh(): void {
    window.location.reload();
}
  
}

