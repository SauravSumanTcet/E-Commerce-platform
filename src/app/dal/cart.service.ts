import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CartService {
    public productSub: Subject<any> = new Subject<any>();
    public productSub$ = this.productSub.asObservable();
    public productSubAction(data) {
        this.productSub.next(data);
    }
    constructor(private http: HttpClient) {

    }

}