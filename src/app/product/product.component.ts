import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Product } from '../model/index';
import { CartService } from '../dal/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['product.component.scss']
})
export class ProductComponent {
    @Input('product') product: Product;
    private itemCountInCart: number = 0;
    constructor(private cartService: CartService) {

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
            this.itemCountInCart--;
        this.product.productCount--;
        this.cartService.productSubAction({ prod: this.product, flag: 'removing' });
    }
    viewDetailedProduct() {

    }
}