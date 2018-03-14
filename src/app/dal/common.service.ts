import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CommonService {
    constructor() {

    }
    public clickSub: Subject<any> = new Subject<any>();
    public clickSub$ = this.clickSub.asObservable();
    public clickAction(data) {
        this.clickSub.next(data);
    }
}