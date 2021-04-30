import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from 'src/app/common/global-constants';
import { Userprofile } from 'src/app/model/classes/userprofile';
import { Category } from 'src/app/model/interfaces/category';
import { Product } from 'src/app/model/interfaces/product';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewInit  {

  data:Product[];
  categoryArray:Category[];

  @ViewChild ('totalvalue')elem:ElementRef;

  testonputinform:string;
  productcategory:Product[];

  SelectedCategory:string;
  prodName:string;
  prdprice:number;
  loginUser:Userprofile=new Userprofile();
  check_is_staff: boolean;
  imgDirectory:any= "http://127.0.0.1:8000"
  index=0
  totalLength:number;
  page:number=1;

  q:number
  constructor(private _apiServe:ApiservicesService,private _router: Router,private _activedRoute:ActivatedRoute)
  {
    this.prdprice=0;
    this.prodName="";
    this.SelectedCategory = "";


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

    this.q=1


  }

  ngOnInit(): void {
    // get all products
    this._apiServe.getAllproduct().subscribe((res)=>{
      this.data=res['product_list'];
      console.log("res****-***-----",res)
      console.log("item0----",res['product_list'][0]['PRDName'])
      //paginations
      this.totalLength= res['product_list'].length
      console.log("res****length-***-----",this.totalLength)
    },
    (err)=>{
      console.log(err)
    })

    // get all categories
    this._apiServe.getAllcategories().subscribe((res)=>{
      this.categoryArray=res
      console.log(res)
    },
    (err)=>{
      console.log(err)
    })
  }

  ngAfterViewInit() {

  }

  onSave(){
    console.log(this.prdprice,this.prodName,this.SelectedCategory)
    console.log("price",this.prdprice)
    if (this.prdprice == null){
      this.prdprice = 0
    }
    var filteObj={
      category:this.SelectedCategory,
      Prodname:this.prodName,
      price:this.prdprice
    }

    this._apiServe.testallquires(filteObj).subscribe((res)=>{
      console.log(res)
      this.data=res
    },
    (err)=>{
      console.log(err)
    })

  }
  addtocard(item_id)
  {

    this._apiServe.addtocard(
      item_id,this.loginUser.id,this.q).subscribe((res) => {
        console.log(res)

      }, (err) => { console.log(err) })

  }


  favoriteItem(itemId){
    console.log(itemId)
    this._apiServe.favoriteItem(
      itemId,this.loginUser.id).subscribe((res) => {
        console.log(res)

      }, (err) => { console.log(err) })

   }

}
