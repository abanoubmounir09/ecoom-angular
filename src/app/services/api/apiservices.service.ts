import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/interfaces/category';
import { Product } from 'src/app/model/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http: HttpClient) { }


  getAllproduct():Observable<Product[]>{
    // let headresx=new Headers({'Access-Control-Allow-Origin':"http://127.0.0.1:8000"})
    return this.http.get<Product[]>("http://127.0.0.1:8000/product/snippets/")
  }

  getOneProduct(cat,name):Observable<Product[]>{
    return this.http.get<Product[]>(`http://127.0.0.1:8000/product/snippets/${cat}/${name}/`)
  }

  getAllcategories():Observable<Category[]>{
    return this.http.get<Category[]>("http://127.0.0.1:8000/product/categories/")
  }
  getproductdetails(id):Observable<Product>{
    return this.http.get<Product>(`http://127.0.0.1:8000/product/snippets/${id}/`)
  }



}
