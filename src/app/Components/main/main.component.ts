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
  prdname:number;



  constructor(private _apiServe:ApiservicesService) {
   this.prdname=1
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
    console.log(this.elem.nativeElement.value);
    // console.log(this.someInput.nativeElement.innerHTML);
    this.elem.nativeElement.style.color= "red"
  }

  onSubmit(){
    // console.log(this.prdname)
    this._apiServe.getOneProduct(this.prdname).subscribe((res)=>{
      console.log(res)
    },
    (err)=>{
      console.log(err)
    })
  }

}
