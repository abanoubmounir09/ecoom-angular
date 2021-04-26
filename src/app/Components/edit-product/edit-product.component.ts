import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/interfaces/category';
import { Product } from 'src/app/model/interfaces/product';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  prd: Product;
  ProductId: string;
  item: Product;
  cover: File;
  categoryArray: Category[];
  urls = [];
  uploaddata =  new FormData();
  constructor(private _apiPrdServ: ApiservicesService, private _router: Router,private _activedRoute: ActivatedRoute) {
    this.prd = {
      PRDName: "",
      PRDCategory: "",
      PRDDesc: "",
      PRDImage: null,
      PRDPrice: "100",
      PRDCost: null,
      PRDDiscountPrice: null,
      PRDCreatedNow: "",
      PRDQuantity: null,

    };

  }

  ngOnInit(): void {
    this._apiPrdServ.getAllcategories().subscribe((res) => {
      this.categoryArray = res
      console.log(res)

    },
    (err) => {
      console.log(err)
    });

    this.ProductId = this._activedRoute.snapshot.params.pid;
    this._apiPrdServ.getproductdetails(this.ProductId).subscribe((res) => {
      console.log('**result**',res);
      this.prd= res[0];
      console.log('**prd**',this.prd);

      this.prd.PRDName=res[0]['PRDName'];
      console.log(this.prd.PRDName);


      this.prd.PRDCost=res[0]['PRDCost']
      this.prd.PRDPrice=res[0]['PRDPrice']
      console.log(this.prd.PRDPrice);

      this.prd.PRDQuantity=res[0]['RDQuantity']
      this.prd.PRDDesc=res[0]['PRDDesc']
      this.prd.PRDDiscountPrice=res[0]['PRDDiscountPrice']

      console.log('details', res);

      console.log('name', this.item.PRDName);
    },
    (err) => {
      console.log(err);
    });
  }




  add() {
    this._apiPrdServ.updateProduct(this.uploaddata).subscribe((res) => {
        console.log(res)
        // this._router.navigateByUrl('/Home');
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
    this.uploaddata.append("PRDId",this.ProductId);
}

}
