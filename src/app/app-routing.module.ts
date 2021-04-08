import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';

const routes: Routes = 
[
  {path:"apiproductbyid/:id",component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
