import { Injectable } from '@angular/core';
import { ApplicationDefaults } from './dal/app.defaults';
import { HttpClient } from '@angular/common/http';
import { ApiUrlList as apiUrlList } from './../environments/environment';
@Injectable()
export class AppService {
  appName = new ApplicationDefaults().appName;
  constructor(private http: HttpClient) {

  }
  configUrl = apiUrlList.getUserProfile;
  login(username, pwd): any {
    return this.http.get(this.configUrl);
  }
}