import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { DbAbstractionLayer } from '../dal/db-abstraction-layer';
import { User } from '../model/user';
import { CommonService } from '../dal/common.service';
import { CartService } from '../dal/cart.service';
import { Subscription } from 'rxjs';
import { Product } from '../model/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  cartSmallViewVisible: boolean = false;
  private productAddedSubs: Subscription;
  productListInCart: Product[] = [];

  constructor(private app: AppService, private cartService: CartService, private dal: DbAbstractionLayer, public dialog: MatDialog, private commonService: CommonService) {
    this.productListInCart = this.cartService.productListInCart;

    dal.isUserIn().subscribe(user => {
      console.log(user);
      this.currentUser = user;
    });

    this.commonService.clickSub$.subscribe(data => {
      if (data == 'closeCart')
        if (this.cartSmallViewVisible)
          this.cartSmallViewVisible = false;
    });

    this.productAddedSubs = this.cartService.productSub$.subscribe(data => {
      this.productListInCart = this.cartService.productListInCart;
    });
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, { hasBackdrop: false });

    dialogRef.afterClosed().subscribe(resultUser => {
      if (resultUser)
        this.dal.loginUser(resultUser);
    });
  }

  logout(): void {
    this.dal.logout();
  }

  ngOnInit() {
  }
  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    console.log("navbar click");
    event.stopPropagation();
  }
}
