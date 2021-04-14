import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Globals } from 'src/app/common/global-constants';
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



  constructor(private _apiServe:ApiservicesService,private _global:Globals) {
    this.prdprice=0;
    this.prodName="";
    this.SelectedCategory = "";
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
