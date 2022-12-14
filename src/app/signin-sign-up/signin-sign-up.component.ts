import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-signin-sign-up',
  templateUrl: './signin-sign-up.component.html',
  styleUrls: ['./signin-sign-up.component.scss']
})
export class SigninSignUpComponent implements OnInit {

  ngOnInit(): void {
  }
  title = 'SigIn_SueignUp';
  isSignIn = true;
  Password_Type = "password"

  constructor(private route : Router, private share: ShareService){}
  Eye() {
    if (this.Password_Type === 'password') {
      this.Password_Type = 'text';
    }
    else if (this.Password_Type === 'text') {
      this.Password_Type = 'password';
    }
  }
  ToSignUp() {
    this.isSignIn = false;
  }
  ToSignIn() {
    this.isSignIn = true;
  }
  signUpform = new FormGroup({
    First: new FormControl('', [Validators.required]),
    Second: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    DOB: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    Password_Type: new FormControl('', [Validators.required]),
  })
  signInform = new FormGroup({
    Email: new FormControl("", Validators.required),
    Password: new FormControl("", Validators.required)
  })

  IsValid = false;
  CheckValid() {
    if ((this.signUpform.value.Password === this.signUpform.value.Password_Type) && (this.signUpform.valid)) {
      this.IsValid = true;
    }
  }
  
  SignUp() {
    var a = this.signUpform.value.First;
    var b = this.signUpform.value.Second;
    var c = this.signUpform.value.Email;
    var d = this.signUpform.value.DOB;
    var e = this.signUpform.value.Password
    console.log(a + b + c + d + e);
    var user1 = new user(a, b, c, d, e);
    this.share.AddUser(user1);
    
  }
  SignIn() {
    var email = this.signInform.value.Email;
    var password = this.signInform.value.Password;
    console.log(email + password);
    var userdata = this.share.getUserData();
    if (userdata.length < 1) {
      console.log("User Not Found");
    }
    else {
      for (let index = 0; index < userdata.length; index++) {
        const element = userdata[index];
        console.log(element);
        if (element.email === email) {
          if (element.password === password) {
            console.log("Success");
            this.route.navigate(['home']);
          }
          else {
            console.log("Incorrect Password");
          }
        }
        else {
          console.log("Invalid Email");
        }
      }
    }

  }
}

export class user {
  first: string;
  second: String
  email: String
  dob: String
  password: String
  constructor(a: string, b: string, c: string, d: string, e: string) {
    this.first = a;
    this.dob = d;
    this.second = b;
    this.email = c;
    this.password = e
  }
}
