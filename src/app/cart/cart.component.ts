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
    @Input('view') view = 'default';
    constructor(private cartService: CartService) {
        this.productAddedSubs = this.cartService.productSub$.subscribe(data => {
            let productExistFlag = false;
            for (let i = 0; i < this.productListInCart.length; i++) {
                let el = this.productListInCart[i];
                if (el.productId == data.productId) {
                    productExistFlag = true;
                    el.productCount++;
                    break;
                }
            }
            if (!productExistFlag) {
                this.productListInCart.push(data);
            }
        });
    }
}