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
  constructor(private dal: DbAbstractionLayer, private cartService: CartService, private http: HttpClient) {
    this.userInSubs = this.dal.isUserIn().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.http.get(apiUrlList.getProducts).subscribe(data => {
      this.productList = data;
      this.productList.map((el, i) => {
        let _ = this.ifProdExistInCart(el.productId, i);
        if (_[0]) {
          return el.productCount = _[1];
        } else {
          return el.productCount = 0;
        }
      });
    });
  }

  ifProdExistInCart(prodId, index) {
    let doExist = [false, 0];
    this.cartService.productListInCart.forEach(el => {
      if (el.productId == prodId) {
        doExist = [true, el.productCount];
      }
    });
    return doExist;
  }

  ngOnDestroy() {
    this.userInSubs.unsubscribe();
  }
}
