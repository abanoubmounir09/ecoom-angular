
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interfaces/product';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data: Product[]
  imgDirectory:any= "http://127.0.0.1:8000"
  constructor(private _apiServe: ApiservicesService) { }

  ngOnInit(): void {

    this._apiServe.getOwnerProduct().subscribe((res)=>{
      this.data = res;
      console.log("details",res[0].PRDName)
    },
    (err)=>{
      console.log(err)
    })
  }


}
