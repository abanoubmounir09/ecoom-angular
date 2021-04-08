import { Component, OnInit, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  @ViewChild ('inputprice')inputprice:ElementRef;
  @ViewChild ('inputname') inputname:ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    // console.log(this.someInput.nativeElement.innerHTML);
  }

  ngOnInit(): void {
  }

  saveBtnClick(){
    // console.log(this.inputprice.nativeElement.value);
    // console.log(this.inputname.nativeElement.value);
    if(window.confirm('Are sure you want to delete this item ?')){
       console.log(this.inputprice.nativeElement.value);
        console.log(this.inputname.nativeElement.value);

     }
  }

}
