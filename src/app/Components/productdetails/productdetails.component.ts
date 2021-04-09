import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit,AfterViewInit {

  item:Product;

  constructor(private _apiServe:ApiservicesService,private _activedRoute:ActivatedRoute,
    private loc: Location) {

     }
  ngAfterViewInit(): void {
    console.log("after iniate",this.item[0])
  }

  ngOnInit(): void
   {
    let ProductId = this._activedRoute.snapshot.params['pid']
    this._apiServe.getproductdetails(ProductId).subscribe((res)=>{
      this.item=res[0];
      console.log("details",res)

      console.log("name",this.item.PRDName)
    },
    (err)=>{
      console.log(err)
    })
  }

  GoBack(){
    this.loc.back();
  }

}
