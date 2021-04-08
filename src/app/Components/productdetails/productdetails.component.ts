import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  prd:Product
  constructor(private _apiServe:ApiservicesService,private _activeRouted:ActivatedRoute) { }

  ngOnInit(): void
   {
    let pid=this._activeRouted.snapshot.params['id'];
    this._apiServe.getproductdetails(pid).subscribe((res)=>
    {
      this.prd=res
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }

}
