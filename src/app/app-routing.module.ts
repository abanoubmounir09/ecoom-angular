import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './Components/addproduct/addproduct.component';
import { MainComponent } from './Components/main/main.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { LoginComponent } from './Components/user/login/login.component';
import { RegisterComponent } from './Components/user/register/register.component';
import { UserprofileComponent } from './Components/userprofile/userprofile.component';
const routes: Routes =
[
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component:MainComponent},
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent},
  {path:'product/:pid', component:ProductdetailsComponent},
  {path:'order', component:OrderComponent},
  {path:'addproduct', component:AddproductComponent},
  {path:'profile', component:UserprofileComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
