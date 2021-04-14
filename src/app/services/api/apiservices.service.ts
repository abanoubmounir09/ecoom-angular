import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/interfaces/category';
import { Order } from 'src/app/model/interfaces/order';
import { Product } from 'src/app/model/interfaces/product';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
=======
import { Useraccount } from 'src/app/model/interfaces/useraccount';



>>>>>>> e30ad9a4faa3c263e56aa0dc2eba6dddb47bed58

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {


  constructor(private http: HttpClient) { }


  getAllproduct():Observable<Product[]>{
    return this.http.get<Product[]>("http://127.0.0.1:8000/product/snippets/")
  }

  getFilterProduct(cat,name):Observable<Product[]>{
    return this.http.get<Product[]>(`http://127.0.0.1:8000/product/query/${cat}/${name}/`)
  }

  getAllcategories():Observable<Category[]>{
    return this.http.get<Category[]>("http://127.0.0.1:8000/product/categories/")
  }

  getproductdetails(id):Observable<Product>{
    return this.http.get<Product>(`http://127.0.0.1:8000/product/prdid/1/`)
  }
  order(id):Observable<Order>{
    let x=
    {
      pid:id
    }
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': ' */*'
             //,'Authorization': 'my-auth-token'
          })
        };
    return this.http.post<Order>(`http://127.0.0.1:8000/product/order/`,x,httpOptions)
  }

  // order(id): Observable<Order> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': ' */*'
  //       //  ,'Authorization': 'my-auth-token'
  //     })
  //   };
  //   return this.http.post<Order>(`http://127.0.0.1:8000/product/order/`, order, httpOptions)
  // }

  //test filters
  testallquires(filterObj):Observable<Product[]>{
    const newobject = {
      category:"apple",
      Prodname:"iphone3",
    }
    var objectToSend = JSON.stringify(filterObj);
    var headersob = new HttpHeaders();
    headersob.append('Content-Type', 'application/json');
    console.log(filterObj)
    return this.http.post<Product[]>(`http://127.0.0.1:8000/product/test/`,objectToSend,{ headers: headersob })
  }

  //register api-http://127.0.0.1:8000/account/signup/
  registeruser(user):Observable<Useraccount>{
    var headersob = new HttpHeaders();
    headersob.append('Content-Type', 'application/json');
    // var objectToSend = JSON.stringify(user); dontparse to string in api token
    return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/register/`,user,{ headers: headersob })
  }

     //active
  loginUser(userob):Observable<Useraccount>{
     var test={
        "username": "cust33",
        "password": "1234",
      }
      var headersob = new HttpHeaders();
      headersob.append('Content-Type', 'application/json');
      return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/login/`,test,{ headers: headersob })
    }


   //LOGOUT
   logoutuser():Observable<Useraccount>{
    var headersob = new HttpHeaders();
    headersob.append('Content-Type', 'application/json');
    var token:string
    if(localStorage.getItem("loginuser") != null){
      var data = JSON.parse(localStorage.getItem("loginuser"));
      token=data['token']
    }
    var logout1={
      Authorization :`Token ${token}`
    }
    return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/logout/`,{ headers: headersob })
  }

<<<<<<< HEAD
  insertProduct(prd: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        //  ,'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Product>(`http://127.0.0.1:8000/product/add/`, prd, httpOptions)
  }
=======
   //active
  //  activeuser():Observable<Useraccount>{
  //   var headersob = new HttpHeaders();
  //   headersob.append('Content-Type', 'application/json');
  //   return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/active/`,{ headers: headersob })
  // }





>>>>>>> e30ad9a4faa3c263e56aa0dc2eba6dddb47bed58


}
