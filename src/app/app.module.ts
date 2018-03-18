import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
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
import { CartComponent } from './cart/cart.component';
import { CartService } from './dal/cart.service';
import { CommonService } from './dal/common.service';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailComponent,
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
    ReactiveFormsModule,
    HttpClientModule,
    NgProgressModule
  ],
  entryComponents: [NavbarComponent, LoginComponent],
  providers: [AppService, DbAbstractionLayer, AuthGuard, CartService, CommonService
    , { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
