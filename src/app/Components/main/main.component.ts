import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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

  SelectedCategory:string;
  productcategory:Product[];
  prodName:string;
  prdprice:number;



  constructor(private _apiServe:ApiservicesService) {
  //  this.prdname="iphone7"
  //  this.SelectedCategory="mobile"
  }

  ngOnInit(): void {
    this._apiServe.getAllproduct().subscribe((res)=>{
      this.data=res;
      console.log(res)
    },
    (err)=>{
      console.log(err)
    })

    // ------------------
    this._apiServe.getAllcategories().subscribe((res)=>{
      this.categoryArray=res
      console.log(res)

    },
    (err)=>{
      console.log(err)
    })
  }

  ngAfterViewInit() {
    // console.log(this.elem.nativeElement.value);
    // // console.log(this.someInput.nativeElement.innerHTML);
    // this.elem.nativeElement.style.color= "red"
  }

  testfun(){

  }

  onSubmit(){
    // console.log(this.SelectedCategory,this.prodName)

    let poductname=this.prodName
    let prodcategory=this.SelectedCategory
    let  dict = {"poductname":poductname,"prodcategory":prodcategory}

    this._apiServe.getFilterProduct(this.SelectedCategory,this.prodName).subscribe((res)=>{
      console.log(res)
      this.data=res

    },
    (err)=>{
      console.log(err)
    })
   }

}
