import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/interfaces/category';
import { Product } from 'src/app/model/interfaces/product';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  prd:Product;
  categoryArray:Category[];
  constructor(private _apiPrdServ: ApiservicesService, private _router: Router)
   {
    this.prd = {
      PRDName: "",
      PRDCategory: "",
      PRDDesc: "",
      PRDImage:null,
      PRDPrice:null,
      PRDCost:null,
      PRDDiscountPrice:null,
      PRDCreatedNow:"",
      PRDQuantity: null,

    }
  }

  ngOnInit(): void
  {
    this._apiPrdServ.getAllcategories().subscribe((res)=>{
      this.categoryArray=res
      console.log(res)

    },
    (err)=>{
      console.log(err)
    })
  }

  add() {
    //  this.prd.PRDImage=`http://127.0.0.1:8000/media/${this.prd.PRDImage}`
    this._apiPrdServ.insertProduct(
      this.prd).subscribe((res) => {
        console.log(res)
        this._router.navigateByUrl('/Home');
      }, (err) => { console.log(err) })
  }

}
