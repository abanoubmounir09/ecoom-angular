import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interfaces/product';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data:Product[];

  constructor(private _apiServe:ApiservicesService) {

  }

  ngOnInit(): void {
    this._apiServe.getAllproduct().subscribe((res)=>{
      this.data=res;
      console.log(res)
    },
    (err)=>{
      console.log(err)
    })
  }

}
