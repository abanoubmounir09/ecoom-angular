import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';
import {Location} from '@angular/common';
import { Userprofile } from 'src/app/model/classes/userprofile';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit, AfterViewInit {
  loginUser:Userprofile=new Userprofile();
  check_is_staff: boolean;
  item: Product;
  ratevalue: string;
  ProductId: string;
  add: number;

  imgDirectory: any = 'http://127.0.0.1:8000';

  constructor(private _apiServe: ApiservicesService,private _activedRoute: ActivatedRoute,
    private loc: Location) {
      this.add = 1

     }
  ngAfterViewInit(): void {
    console.log('after iniate', this.item[0]);
  }

  ngOnInit(): void
   {
    this.ProductId = this._activedRoute.snapshot.params.pid;
    this._apiServe.getproductdetails(this.ProductId).subscribe((res) => {
      this.item = res[0];
      console.log('details', res);

      console.log('name', this.item.PRDName);
    },
    (err) => {
      console.log(err);
    });
  }

  GoBack(){
    this.loc.back();
  }

  sRating(){
    console.log('*****-rate', this.ratevalue);
    this._apiServe.rateProduct(this.ProductId, this.ratevalue).subscribe((res) => {
     console.log(res);
   },
   (err) => {
     console.log(err);
   });


  }
  addincrement(){
    this.add +=1
  }


  subproduct(){
    if (this.add > 1){
      this.add -= 1;
    }
    }


    addtocard(item_id)
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
    console.log('ssss')
    console.log(item_id)
    this._apiServe.addtocard(
      item_id,this.loginUser.id,this.add).subscribe((res) => {
        console.log(res)

      }, (err) => { console.log(err) })
  }

}