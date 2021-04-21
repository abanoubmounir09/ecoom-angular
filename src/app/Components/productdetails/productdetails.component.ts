import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit, AfterViewInit {

  item: Product;
  ratevalue: string;
  ProductId: string;
  add: number;

  imgDirectory: any = 'http://127.0.0.1:8000';

  constructor(private _apiServe: ApiservicesService, private _activedRoute: ActivatedRoute,
              private loc: Location) {
      this.add = 1;

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
    this.add += 1;

  }


  subproduct(){
    if (this.add > 1){
      this.add -= 1;
    }

    }
  }

