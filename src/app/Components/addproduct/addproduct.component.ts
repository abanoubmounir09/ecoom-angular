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
  cover:File;
  urls=[];
  uploaddata =  new FormData();

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

  //add product subscripe func
  add() {
    //  this.prd.PRDImage=`http://127.0.0.1:8000/media/${this.prd.PRDImage}`
    console.log("----iimg----",this.prd);
    var xx ={
      'itm' :this.uploaddata,
      // data:this.uploaddata
    }
    // console.log("----uploaddata----", this.uploaddata.get("cover"));

    var finalData = [];
    var t1 = this.uploaddata.get

    finalData.push({
      d1:t1,
      d2:this.prd
    })
    const alldata={order: this.prd, takenSeatsIds:this.uploaddata}
    this._apiPrdServ.insertProduct(this.uploaddata).subscribe((res) => {
        console.log(res)
        this._router.navigateByUrl('/Home');
      }, (err) => { console.log(err) })
  }

  onselect(event:any){
    this.cover=event.target.files[0]
    this.prd.PRDImage=this.cover
    
    // uploaddata =  new FormData();
    this.uploaddata.append("cover",this.cover,this.cover.name)
    this.uploaddata.append("PRDName",this.prd.PRDName)
    this.uploaddata.append("PRDCategory",this.prd.PRDCategory)
    this.uploaddata.append("PRDDesc",this.prd.PRDDesc)
    this.uploaddata.append("PRDPrice",this.prd.PRDPrice)
    this.uploaddata.append("PRDCost",this.prd.PRDCost)
    this.uploaddata.append("PRDDiscountPrice",this.prd.PRDDiscountPrice)
    this.uploaddata.append("PRDQuantity",this.prd.PRDQuantity)

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
    console.log("----file----",file);
    this.cover=imageInput.target.files[0]
    console.log("----iimg----",this.cover);
  }

}
