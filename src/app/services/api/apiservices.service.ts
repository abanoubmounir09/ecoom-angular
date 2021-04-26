import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/interfaces/category';
import { Order } from 'src/app/model/interfaces/order';
import { Product } from 'src/app/model/interfaces/product';
import { Useraccount } from 'src/app/model/interfaces/useraccount';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

   token: string;
   userId: string;
   username: string;
  constructor(private http: HttpClient) {

    if (localStorage.getItem('loginuser') != null){
      const data = JSON.parse(localStorage.getItem('loginuser'));
      this.token = data.token;
      this.userId = data.id;
      this.username = data.username;
    }
   }

// get all product
  getAllproduct(): Observable<Product[]>{
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token  ' + this.token
   });
  //  { headers: reqHeader }
    return this.http.get<Product[]>('http://127.0.0.1:8000/product/snippets/');
  }

  getFilterProduct(cat, name): Observable<Product[]>{
    return this.http.get<Product[]>(`http://127.0.0.1:8000/product/query/${cat}/${name}/`);
  }
// get all category
  getAllcategories(): Observable<Category[]>{
    return this.http.get<Category[]>('http://127.0.0.1:8000/product/categories/');
  }

  // get all product details
  getproductdetails(itemId): Observable<Product>{
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token  ' + this.token
   });
    return this.http.get<Product>(`http://127.0.0.1:8000/product/prdid/${itemId}/`, { headers: reqHeader });
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

  // test filters
  testallquires(filterObj): Observable<Product[]>{
    // const newobject = {
    //   category:"apple",
    //   Prodname:"iphone3",
    // }
    const objectToSend = JSON.stringify(filterObj);
    const headersob = new HttpHeaders();
    headersob.append('Content-Type', 'application/json');
    console.log(filterObj);
    return this.http.post<Product[]>(`http://127.0.0.1:8000/product/test/`, objectToSend, { headers: headersob });
  }

  // register api-http://127.0.0.1:8000/account/signup/
    registeruser(user): Observable<Useraccount>{
    const headersob = new HttpHeaders();
    headersob.append('Content-Type', 'application/json');
    // var objectToSend = JSON.stringify(user); dontparse to string in api token
    return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/register/`, user, { headers: headersob });
  }

     // active
  loginUser(userob): Observable<Useraccount>{
    //  var test={
    //     "username": "cust33",
    //     "password": "1234",
    //   }
      const headersob = new HttpHeaders();
      headersob.append('Content-Type', 'application/json');
      return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/login/`, userob, { headers: headersob });
    }


   // LOGOUT
   logoutuser(): Observable<Useraccount>{
    const headersob = new HttpHeaders();
    headersob.append('Content-Type', 'application/json');
    let token: string;
    if (localStorage.getItem('loginuser') != null){
      const data = JSON.parse(localStorage.getItem('loginuser'));
      token = data.token;
    }
    const logout1 = {
      Authorization : `Token ${token}`
    };
    return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/logout/`, { headers: headersob });
  }

   // active
  //  activeuser():Observable<Useraccount>{
  //   var headersob = new HttpHeaders();
  //   headersob.append('Content-Type', 'application/json');
  //   return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/active/`,{ headers: headersob })
  // }

  // add to card
  addtocard(id, userid,quantity): Observable<Order>{
    const x =
    {
      pid: id,
      uid: userid,
      quantity:quantity
    };
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: ' */*'
             // ,'Authorization': 'my-auth-token'
          })
        };
    return this.http.post<Order>(`http://127.0.0.1:8000/product/order/`, x, httpOptions);
  }



  delonefromcard(id, userid,quantity): Observable<Order>{
    const x =
    {
      pid: id,
      uid: userid,
      quantity:quantity
    };
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: ' */*'
             // ,'Authorization': 'my-auth-token'
          })
        };
    return this.http.post<Order>(`http://127.0.0.1:8000/product/delfromcard/`, x, httpOptions);
  }

  

  // insert product
  insertProduct(prd): Observable<any> {
    const headersob = new HttpHeaders();
    headersob.append('Content-Type', 'application/json');
    // const alldata={order: prd, takenSeatsIds:imgdata}
    // console.log("tokeb******",alldata['takenSeatsIds'].get("cover"));


    return this.http.post<any>(`http://127.0.0.1:8000/product/add/`, prd);
  }
   // active
  //  activeuser():Observable<Useraccount>{
  //   var headersob = new HttpHeaders();
  //   headersob.append('Content-Type', 'application/json');
  //   return this.http.post<Useraccount>(`http://127.0.0.1:8000/account/active/`,{ headers: headersob })
  // }


  mycard(userid): Observable<Order>{
    const x =
    {
      uid: userid
    };
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: ' */*'
             // ,'Authorization': 'my-auth-token'
          })
        };
    return this.http.post<Order>(`http://127.0.0.1:8000/product/mycard/`, x, httpOptions);
  }

  rateProduct(prdId, stars): Observable<any>{
    const rating = {
      stars: "3",
      uname: this.username,
      prdId: prdId,
    };

    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token  ' + this.token
   });
    return this.http.post(`http://127.0.0.1:8000/product/rate/`, rating, { headers: reqHeader });
  }

  getOwnerProduct(): Observable<Product[]>{
    const objecowner = {id: this.userId};
    console.log('*********toooken is ******', this.token);
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
   });

    return this.http.post<Product[]>(' http://127.0.0.1:8000/product/ownerproduct/', objecowner, { headers: reqHeader } );
  }


  delitemcard(userid,pid):Observable<Order[]>{
    let x=
    {
      uid:userid,
      pid:pid
    }
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': ' */*'
             //,'Authorization': 'my-auth-token'
          })
        };
    return this.http.post<Order[]>(`http://127.0.0.1:8000/product/delcard/`,x,httpOptions)
  }




}




// const headersob = new HttpHeaders();
// headersob.append('Content-Type', 'application/json');
// headersob.append('Access-Control-Allow-Origin', '*');
// headersob.append("Access-Control-Allow-Methods", "POST, OPTIONS");
// headersob.append("Access-Control-Allow-Headers", "Content-Type");
