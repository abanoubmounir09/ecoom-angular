import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/interfaces/order';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:Order;
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
      PRDCreatedNow:""
      
      
    }
    }

  ngOnInit(): void 
  {
    let id = this._activedRoute.snapshot.params['pid']
    console.log('ssss')
    console.log(id)
    this._apiPrdServ.order(
      id).subscribe((res) => {
        console.log(res)
        
      }, (err) => { console.log(err) })
  }

}
