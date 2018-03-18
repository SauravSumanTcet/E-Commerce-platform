import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../model/index';

@Injectable()
export class CartService {
    public productSub: Subject<any> = new Subject<any>();
    public productSub$ = this.productSub.asObservable();
    private productAddedSubs: Subscription;
    productListInCart: Product[] = [];
    productsInResponse: Product[] = [];
    public productSubAction(data) {
        this.productSub.next(data);
    }
    constructor(private http: HttpClient) {
        this.productListInCart = JSON.parse(localStorage.getItem('cart'));

        this.productAddedSubs = this.productSub$.subscribe(data => {
            let productExistFlag = false;
            let prod = data.prod;
            if (data.flag == 'adding') {
                this.productListInCart.map((obj) => {
                    if (obj.productId == prod.productId) {
                        productExistFlag = true;
                        obj.productCount++;
                    }
                });

                if (!productExistFlag) {
                    this.productListInCart.push(prod);
                }
            } else if (data.flag == 'removing') {
                this.productListInCart = this.productListInCart.filter((item) => item.productId !== prod.productId);
            }
            else if (data.flag == 'removingOne') {
                this.productListInCart.map((obj) => {
                    if (obj.productId == prod.productId) {
                        productExistFlag = true;
                        obj.productCount--;
                    }
                });
            }

            localStorage.setItem('cart', JSON.stringify(this.productListInCart));
        });
    }

    addToCart(product) {
        this.productSubAction({ prod: product, flag: 'adding' });
    }
    removeOneFromCart(product) {
        if (product.productCount == 1) {
            this.productSubAction({ prod: product, flag: 'removing' });
        } else
            this.productSubAction({ prod: product, flag: 'removingOne' });
    }
    removeFromCart(product) {
        this.productSubAction({ prod: product, flag: 'removing' });
    }
}