import { Product } from "./index";

export class Cart {
    product: Product[]
    totalItems: number
    constructor() {
        let totalCount = 0;
        this.product.forEach(prod => {
            totalCount += prod.productCount;
        });
        this.totalItems = totalCount;
    }
}