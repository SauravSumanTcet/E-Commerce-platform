import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { DbAbstractionLayer } from './dal/db-abstraction-layer';
import { CommonService } from './dal/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = this.app.appName;
  constructor(private app: AppService, private dal: DbAbstractionLayer, private commonService: CommonService) {
  }
  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("click detected");
    //send subscriber notification that if cart is open then close it!!!
    this.commonService.clickAction('closeCart');
  }
}
