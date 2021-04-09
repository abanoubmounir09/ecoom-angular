import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';

const routes: Routes =
[
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component:MainComponent},
  {path:'product/:pid', component:ProductdetailsComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
