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
  q:number
  constructor(private _apiServe:ApiservicesService,private _router: Router,private _activedRoute:ActivatedRoute) {
    this.prdprice=0;
    this.prodName="";
    this.SelectedCategory = "";
    this.q=1
  }

  ngOnInit(): void {
    // get all products
    this._apiServe.getAllproduct().subscribe((res)=>{
      this.data=res;
      console.log(res)
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
      item_id,this.loginUser.id,this.q).subscribe((res) => {
        console.log(res)

      }, (err) => { console.log(err) })

  }


  onSubmit(){


    // let poductname=this.prodName
    // let prodcategory=this.SelectedCategory
    // let  dict = {"poductname":poductname,"prodcategory":prodcategory}

    // this._apiServe.getFilterProduct(this.SelectedCategory,this.prodName).subscribe((res)=>{
    //   console.log(res)
    //   this.data=res

    // },
    // (err)=>{
    //   console.log(err)
    // })

    // this._apiServe.testallquires().subscribe((res)=>{
    //   console.log(res)
    // },
    // (err)=>{
    //   console.log(err)
    // })

   }

}
