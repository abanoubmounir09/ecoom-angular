import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { LoginComponent } from './Components/user/login/login.component';
import { RegisterComponent } from './Components/user/register/register.component';

const routes: Routes =
[
  { path: 'apiproductbyid/:id', component: ProductdetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},

  { path: 'productdetails' , component:ProductdetailsComponent},

  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component:MainComponent},
  {path:'product/:pid', component:ProductdetailsComponent},
  {path:'contact us',component:ContactUsComponent},
  {path:'about us',component:AboutUsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
