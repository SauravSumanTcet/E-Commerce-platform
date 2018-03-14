import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable, Inject } from "@angular/core";
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable()
export class DbAbstractionLayer {

    // isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    userSubject = new BehaviorSubject<User>(this.hasUser());
    constructor() {
    }
    /**
     * if we have token, the user is loggedIn
     * @returns {User}
     */
    private hasUser(): User {
        let user = new User();
        let isLogin = !!localStorage.getItem('token');
        if (isLogin)
            user = JSON.parse(localStorage.getItem('user'));
        else {
            user.isLogin = false;
        }
        return user;
    }


    loginUser(user) {
        console.log(user);
        localStorage.setItem('token', user.isLogin);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
    }

    logout(): void {
        localStorage.removeItem('token');
        let user = new User();
        user.isLogin = false;
        this.userSubject.next(user);
    }

    isUserIn(): Observable<User> {
        return this.userSubject.asObservable();
    }
}



