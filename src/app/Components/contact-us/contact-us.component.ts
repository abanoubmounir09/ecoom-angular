import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name:string;
  email:any;
  phone:string;
  message:any;

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    let msg = `My Name is ${this.name} . My Phone is ${this.phone} .My Email is ${this.email} . My Message is ${this.message}`;
    alert(msg);
  }
}
