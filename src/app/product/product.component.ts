import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Product } from '../model/index';
import { CartService } from '../dal/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['product.component.scss']
})
export class ProductComponent
// implements OnChanges 
{
    @Input('product') product: Product;
    private itemCountInCart: number = 0;
    constructor(private cartService: CartService) {

    }
    // ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    //     console.log("change detected",changes);
    // }
    ngOnInit() {

    }
    addToCart() {
        this.itemCountInCart++;
        this.cartService.productSubAction(this.product);
    }
    removeFromCart() {
        if (this.itemCountInCart > 0)
            this.itemCountInCart--;
    }
    viewDetailedProduct() {

    }
}