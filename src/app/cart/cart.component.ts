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
    private totalAmt: number;
    constructor(private cartService: CartService) {
        this.productListInCart = this.cartService.productListInCart;
        this.productAddedSubs = this.cartService.productSub$.subscribe(data => {
            this.productListInCart = this.cartService.productListInCart;
        });
    }

    calculateTotalAmt(index) {
        if (index >= 0) {
            return '\u20b9' + ' ' + this.productListInCart[index].price * this.productListInCart[index].productCount;
        } else if (index == -1) {
            let totalAmt = 0;
            this.productListInCart.forEach(el => {
                totalAmt += (el.productCount * el.price);
            });
            return '\u20b9' + ' ' + totalAmt;
        }
    }


}