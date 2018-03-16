import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './app-material.module';
import { CustomNgBootstrapModule } from './app-ng-bootstrap.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

import { AuthGuard } from './auth.guard';
import { AppService } from './app.service';
import { DbAbstractionLayer } from './dal/db-abstraction-layer';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartService } from './dal/cart.service';
import { CommonService } from './dal/common.service';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    CustomNgBootstrapModule,
    Angular2FontawesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [NavbarComponent, LoginComponent],
  providers: [AppService, DbAbstractionLayer, AuthGuard, CartService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
