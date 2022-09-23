import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SigIn_SueignUp';
  isSignIn = false;
  Password_Type = "password"
  Eye(){
    if(this.Password_Type === 'password'){
      this.Password_Type = 'text';
    }
    else if(this.Password_Type === 'text'){
    this.Password_Type = 'password';
    }
  }
  ToSignUp(){
    this.isSignIn = false;
  }
  ToSignIn(){
    this.isSignIn = true;
  }   
}
