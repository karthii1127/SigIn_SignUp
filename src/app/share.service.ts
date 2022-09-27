import { Injectable } from '@angular/core';
import { user } from './signin-sign-up/signin-sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }
  UserData: user[] = [];
  AddUser(user: user) {
    this.UserData.push(user);
  }
  getUserData(){
    return this.UserData;
  }
}
