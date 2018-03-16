import { Component, OnInit, Input } from '@angular/core';
import { Product, Cart } from '../model/index';
import { CartService } from '../dal/cart.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    private cart: Cart;
    productListInCart: Product[] = [];
    private productAddedSubs: Subscription;
    constructor(private cartService: CartService) {
        this.productListInCart = this.cartService.productListInCart;
        // this.productAddedSubs = this.cartService.productSub$.subscribe(data => {
        //     this.productListInCart = this.cartService.productListInCart;
        // });
    }
}