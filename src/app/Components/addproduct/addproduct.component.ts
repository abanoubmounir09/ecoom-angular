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
  prd: Product;
  categoryArray: Category[];
  cover: File;
  urls = [];
  uploaddata =  new FormData();
  token:string;userId:string;username:string;

  addcat:string
  constructor(private _apiPrdServ: ApiservicesService, private _router: Router)
   {
    this.prd = {
      PRDName: "",
      PRDCategory: null,
      PRDDesc: "",
      PRDImage: null,
      PRDPrice: null,
      PRDCost: null,
      PRDDiscountPrice: null,
      PRDCreatedNow: "",
      PRDQuantity: null,

    };
    if (localStorage.getItem('loginuser') != null){
      const data = JSON.parse(localStorage.getItem('loginuser'));
      this.token = data.token;
      this.userId = data.id;
      this.username = data.username;
    }
  }

  ngOnInit(): void
  {
    this._apiPrdServ.getAllcategories().subscribe((res) => {
      this.categoryArray = res
      console.log(res)

    },
    (err) => {
      console.log(err)
    });
  }

  //add product subscripe func
  add() {
    this._apiPrdServ.insertProduct(this.uploaddata).subscribe((res) => {
        console.log(res)
        this._router.navigateByUrl('/Home');
      }, (err) => { console.log(err) });
  }

  onselect(event: any){
    this.cover = event.target.files[0];
    this.prd.PRDImage = this.cover;

    // uploaddata =  new FormData();
    this.uploaddata.append("cover", this.cover, this.cover.name);
    this.uploaddata.append("PRDName", this.prd.PRDName);
    this.uploaddata.append("PRDCategory", this.prd.PRDCategory);
    this.uploaddata.append("PRDDesc", this.prd.PRDDesc);
    this.uploaddata.append("PRDPrice", this.prd.PRDPrice);
    this.uploaddata.append("PRDCost", this.prd.PRDCost);
    this.uploaddata.append("PRDDiscountPrice", this.prd.PRDDiscountPrice);
    this.uploaddata.append("PRDQuantity", this.prd.PRDQuantity);
    this.uploaddata.append("userid", this.userId);
    this.uploaddata.append("newcat",this.addcat)

    // if(event.target.files){
    //   for(let i=0;i<File.length;i++){
    //     var reader= new FileReader();
    //     reader.readAsDataURL(event.target.files[i]);
    //     reader.onload=(events:any)=>{

    //       this.urls.push(events.target.result);
    //     }
    //   }
    // }
    // console.log("urls is ",this.urls[0]);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    console.log("----file----", file);
    this.cover = imageInput.target.files[0];
    console.log("----iimg----", this.cover);
  }

}
