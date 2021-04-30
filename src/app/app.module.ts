import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { MainComponent } from './Components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';
import { OrderComponent } from './Components/order/order.component';
import { LoginComponent } from './Components/user/login/login.component';
import { RegisterComponent } from './Components/user/register/register.component';
import { Globals } from './common/global-constants';
import { UserprofileComponent } from './Components/userprofile/userprofile.component';
import { OnlinePayComponent } from './Components/online-pay/online-pay.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    MainComponent,
    ProductdetailsComponent,
    AddproductComponent,
    OrderComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    UserprofileComponent,
    OnlinePayComponent,
    EditProductComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent],

})
export class AppModule { }
