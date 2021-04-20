import { Component, OnInit, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Userprofile } from 'src/app/model/classes/userprofile';
import { ApiservicesService } from 'src/app/services/api/apiservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  @ViewChild ('inputprice')inputprice:ElementRef;
  @ViewChild ('inputname') inputname:ElementRef;
  prdname:string;
  loginUser:Userprofile=new Userprofile();
  check_is_staff:boolean;
  constructor(private _serapi:ApiservicesService, private router: Router ) {

    if(localStorage.getItem("loginuser") != null){
      var data = JSON.parse(localStorage.getItem("loginuser"));
      this.loginUser.email=data['email']
      this.loginUser.username=data['username']
      this.loginUser.id=data['id']
      this.loginUser.is_staff=data['is_staff']
      this.loginUser.token=data['token']
      if (data['is_staff']==true){
        this.check_is_staff=true
      }
      else{
        this.check_is_staff=false
      }
      console.log("staff is ", this.check_is_staff)
    }
    // console.log("ttttttttt********-------",this.loginUser)

  }

  ngAfterViewInit(): void {

    // console.log(this.someInput.nativeElement.innerHTML);
  }

  ngOnInit(): void {
    console.log("loginUser********-------",this.loginUser)
  }

  saveBtnClick(){
     console.log(`prd name is  ${this.prdname}`);

    // if(window.confirm('Are sure you want to delete this item ?')){
    //    console.log(this.inputprice.nativeElement.value);
    //     console.log(this.inputname.nativeElement.value);
    //  }
  }

  // user logout
  logout(){
    if(localStorage.getItem("loginuser") != null){
      localStorage.removeItem('loginuser');
    }
    this.router.navigate(['/Home'])
  }

  //check who active in django
  checkactiveuser(){
      console.log("active")
      // this._serapi.loginUser().subscribe((res)=>{
      //   console.log("return from login user",res)
      // },
      // (err)=>{
      //   console.log(err)
      // })
  }

}
