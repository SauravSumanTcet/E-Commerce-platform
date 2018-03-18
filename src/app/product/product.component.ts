import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Product } from '../model/index';
import { CartService } from '../dal/cart.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['product.component.scss']
})
export class ProductComponent {
    @Input('product') product: Product;
    private itemCountInCart: number = 0;
    constructor(private cartService: CartService, private router: Router) {

    }

    ngOnInit() {
    }
    addToCart() {
        this.itemCountInCart++;
        this.product.productCount++;
        this.cartService.productSubAction({ prod: this.product, flag: 'adding' });
    }
    removeFromCart() {
        if (this.itemCountInCart > 0)
            this.itemCountInCart = 0;
        this.product.productCount = 0;
        this.cartService.productSubAction({ prod: this.product, flag: 'removing' });
    }
    viewDetailedProduct() {
        let navigationExtras: NavigationExtras = {
            queryParams: { id: this.product.productId }
        };
        this.router.navigate(['productDetail'], navigationExtras);
    }
}