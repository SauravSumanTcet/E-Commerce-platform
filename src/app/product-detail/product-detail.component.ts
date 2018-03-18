import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Product } from '../model/index';
import { CartService } from '../dal/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent {
    private product: Product;
    private itemCountInCart: number = 0;
    constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(queryParams => {
            if (queryParams.id) {
                this.product = this.cartService.productsInResponse.find(o => o.productId === queryParams.id);
                if (!this.product)
                    this.router.navigate(['home']);
            }
            else {
                this.router.navigate(['home']);
            }
        });
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
}