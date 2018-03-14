import { Component, OnInit } from '@angular/core';
import { DbAbstractionLayer } from '../dal/db-abstraction-layer';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrlList as apiUrlList } from './../../environments/environment';
import { Product } from '../model/index';
import { CartService } from '../dal/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private userInSubs: Subscription;
  private user: any;
  private productList: any = [];
  productListInCart: Product[] = [];
  constructor(private dal: DbAbstractionLayer, private cartService: CartService, private http: HttpClient) {
    this.userInSubs = this.dal.isUserIn().subscribe(user => {
      this.user = user;
    });    
  }

  ngOnInit() {
    this.http.get(apiUrlList.getProducts).subscribe(data => {
      this.productList = data;
    })
  }
  ngOnDestroy() {
    this.userInSubs.unsubscribe();
  }
}
