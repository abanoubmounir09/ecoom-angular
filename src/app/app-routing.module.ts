import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './Components/addproduct/addproduct.component';
import { MainComponent } from './Components/main/main.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';

const routes: Routes =
[
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component:MainComponent},
  {path:'product/:pid', component:ProductdetailsComponent},
  {path:'order/:pid', component:OrderComponent},
  {path:'addproduct', component:AddproductComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
