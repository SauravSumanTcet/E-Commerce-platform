import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _user: any;
  constructor(public dialogRef: MatDialogRef<NavbarComponent>, private app: AppService) {

  }
  onNoClick(): void {
    this.dialogRef.close({ isLogin: false });
  }
  login(u, p) {
    console.log(u + ' is trying to login with ' + p);
    this.app.login(u, p).subscribe(user => {
      this.dialogRef.close(user);
    }, err => {
      this.onNoClick();
    });
  }
  ngOnInit() {

  }
}