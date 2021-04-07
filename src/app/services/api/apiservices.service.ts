import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http: HttpClient) { }

   headers4 = new HttpHeaders().set('access-control-allow-origin',"http://localhost:8000/");
  getAllproduct():Observable<Product[]>{
    return this.http.get<Product[]>("http://127.0.0.1:8000/product/snippets/")
  }

  getOneProduct(prid):Observable<Product>{
    return this.http.get<Product>(`/product/snippets/${prid}`)
  }



}
