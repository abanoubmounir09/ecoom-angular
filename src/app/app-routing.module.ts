import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { LoginComponent } from './Components/user/login/login.component';
import { RegisterComponent } from './Components/user/register/register.component';

const routes: Routes =
[
<<<<<<< HEAD
  { path: 'apiproductbyid/:id', component: ProductdetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},

=======
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component:MainComponent},
  {path:'product/:pid', component:ProductdetailsComponent},
>>>>>>> 8b80c20e4d939ddfe650a0f9466791eb6c96ae7a
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
