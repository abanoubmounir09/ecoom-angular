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
import { LoginComponent } from './Components/user/login/login.component';
import { RegisterComponent } from './Components/user/register/register.component';
import { Globals } from './common/global-constants';
import { UserprofileComponent } from './Components/userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    MainComponent,
    ProductdetailsComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent],

})
export class AppModule { }
